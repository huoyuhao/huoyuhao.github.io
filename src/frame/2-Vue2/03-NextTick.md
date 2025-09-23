---
meta:
- name: description
  content: Vue方法NextTick
- name: keywords
  content: Vue方法NextTick,Vue,Vue2,Vue3,NextTick
---

# NextTick

## 介绍

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

我们可以理解成，Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

使用 nextTick 方法经常用来解决以下问题
+ 获取更新后的 DOM 元素
+ 更新后的样式计算
+ 触发一些特定事件

## Vue2 NextTick 实现原理

+ 源码位置：/src/core/util/next-tick.js
+ callbacks也就是异步操作队列
+ callbacks新增回调函数后又执行了timerFunc函数，pending是用来标识同一个时间只能执行一次

```ts
export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;

  // cb 回调函数会经统一处理压入 callbacks 数组
  callbacks.push(() => {
    if (cb) {
      // 给 cb 回调函数执行加上了 try-catch 错误处理
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  // 执行异步延迟函数 timerFunc
  if (!pending) {
    pending = true;
    timerFunc();
  }

  // 当 nextTick 没有传入函数参数的时候，返回一个 Promise 化的调用
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}
```

timerFunc函数定义，这里是根据当前环境支持什么方法则确定调用哪个，分别有：

`Promise.then、MutationObserver、setImmediate、setTimeout`

通过上面任意一种方法，进行降级操作
```js
export let isUsingMicroTask = false;
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  // 判断1：是否原生支持Promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
    if (isIOS) setTimeout(noop);
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver)
  || MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // 判断2：是否原生支持MutationObserver
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // 判断3：是否原生支持setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 判断4：上面都不行，直接用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}
```

+ 把回调函数放入callbacks等待执行
+ 将执行函数放到微任务或者宏任务中
+ 事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调
+ 如果nextTick是微任务，它会在当前同步任务执行完立即执行所有的微任务，也就是修改DOM的操作也会在当前tick内执行，等本轮tick任务全部执行完成，才是开始执行UI rendering
+ 如果nextTick是宏任务，它会被推进宏任务队列，并且在本轮tick执行完之后的某一轮执行，注意，它并不一定是下一轮，因为你不确定宏任务队列中它之前还有所少个宏任务在等待着
+ 为了能够尽快更新DOM，Vue中优先采用的是微任务，并且在Vue3中，它没有了兼容判断，直接使用的是promise.then微任务，不再考虑宏任务

## vue3 nextTick 和 Promise

### nextTick 和 数据变更

```html
<template>
  <p id="test">{{ message }}</p>
  <button @click="changeData">变更数据</button>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const message = ref('hello');
const changeData = () => {
  // message.value = 'world0';
  nextTick(() => {
    message.value = 'world1';
    const text = window.document.getElementById('test').innerText;
    console.log(1, text);
  });
  message.value = 'world2';
  nextTick(() => {
    message.value = 'world3';
    const text = window.document.getElementById('test').innerText;
    console.log(2, text);
  });
};
// 不注释 message.value = 'world0';
// 1 'world2'
// 2 'world2'
// 注释 message.value = 'world0';
// 1 'hello'
// 2 'world1'
</script>
```

注释 message.value = 'world0'
+ 这里第一个 nextTick 由于之前没有数据变更，所以直接当成微任务添加到事件队列中，然后执行，由于没有数据变更，所以直接打印出 'hello'
+ 第二个 nextTick 由于之前有数据变更，所以直接当成微任务添加到事件队列中，然后执行，由于有数据变更，取微任务执行之前最后一次变更的数据，所以打印出 'world1'

不注释 message.value = 'world0'
+ 这里第一个 nextTick 由于之前有数据变更，所以添加到nextTick的事件队列中，在数据更新后执行，第二个nextTick也加载队列后面
+ 最终之前钱赋值world2，所以都打印 'world2'

### nextTick 和 Promise

```html
<template>
  <p id="test">{{ message }}</p>
  <button @click="changeData">变更数据</button>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const message = ref('hello');
const changeData = () => {
  // message.value = 'world0';
  Promise.resolve().then(() => {
    message.value = 'world1';
    const text = window.document.getElementById('test').innerText;
    console.log(1, text);
    Promise.resolve().then(() => {
      const text = window.document.getElementById('test').innerText;
      console.log(2, text);
    });
  });
  nextTick(() => {
    message.value = 'world2';
    const text = window.document.getElementById('test').innerText;
    console.log(3, text);
    Promise.resolve().then(() => {
      const text = window.document.getElementById('test').innerText;
      console.log(4, text);
    });
  });
  // message.value = 'world';
  Promise.resolve().then(() => {
    message.value = 'world3';
    const text = window.document.getElementById('test').innerText;
    console.log(5, text);
    Promise.resolve().then(() => {
      const text = window.document.getElementById('test').innerText;
      console.log(6, text);
    });
  });
};
// 注释 message.value = 'world0';
// 1 'hello' 没有赋值 顺序执行promise
// 3 'hello'
// 5 'hello'
// 2 'world3' 存在赋值，取最新的值 world3 执行promise
// 4 'world3'
// 6 'world3'
// 不注释 message.value = 'world0';
// 1 'world0' 有赋值，取最新的值 world0 执行promise
// 5 'world0'
// 3 'world0'
// 2 'world2' 第一层promise执行完，nextTick中存在赋值，取最新的值 world2 执行promise
// 6 'world2'
// 4 'world2'
// 不注释 message.value = 'world'; 放中间
// 1 'hello' 没有赋值 顺序执行promise
// 3 'hello' 没有赋值 顺序执行nextTick
// 5 'world2' 存在赋值，取最新的值 world2 执行promise
// 2 'world2'
// 4 'world2'
// 6 'world3' 多个promise嵌套，存在赋值，会触发更新
</script>
```

### nextTick 和 DOM

```html
<template>
  <p id="test">{{ message }}</p>
  <button @click="changeData">变更数据</button>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const message = ref('hello');
const changeData = () => {
  Promise.resolve().then(() => {
    message.value = 'world1';
    const text = window.document.getElementById('test').innerText;
    console.log(1, text);
  });
  nextTick(() => {
    message.value = 'world2';
    const text = window.document.getElementById('test').innerText;
    console.log(2, text);
    Promise.resolve().then(() => {
      const text = window.document.getElementById('test').innerText;
      console.log(3, text);
    });
  });
  message.value = 'world';
  nextTick(() => {
    message.value = 'world3';
    const text = window.document.getElementById('test').innerText;
    console.log(4, text);
    Promise.resolve().then(() => {
      const text = window.document.getElementById('test').innerText;
      console.log(5, text);
    });
  });
  Promise.resolve().then(() => {
    message.value = 'world4';
    const text = window.document.getElementById('test').innerText;
    console.log(6, text);
    Promise.resolve().then(() => {
      const text = window.document.getElementById('test').innerText;
      console.log(7, text);
    });
  });
};
// 不注释 message.value = 'world'; 放中间
// 1 'hello' 没有赋值 顺序执行promise
// 2 'hello'
// 6 'world2' 存在赋值，取最新的值 world2 执行promise
// 3 'world2' 注意这里 先执行nextTick中的promise
// 4 'world2'
// 7 'world3'
// 5 'world3'
</script>
```

+ 总结下来，如果有值变更，多个nextTick会在当前所有微任务执行完后顺序执行
+ 如果没有值变更，nextTick等同于Promise，不会触发Dom更新，Dom更新算一次宏任务
+ 如果存在嵌套的Promise，会在一层执行完后更新Dom再执行二层任务