---
meta:
  - name: description
    content: 深入理解JavaScript中的this关键字，包括其在不同上下文中的指向规则和绑定机制
  - name: keywords
    content: JavaScript,this,上下文,作用域,箭头函数,call,apply,bind,前端开发
---
# JavaScript中的this关键字详解

## 1. this的指向规则

理解JavaScript中的this关键字是掌握JavaScript编程的重要部分。this的值取决于函数如何被调用，而不是在哪里定义。

## 2. 全局环境中的this

在全局执行上下文中（即在任何函数之外），this指向全局对象。

- 在浏览器环境中，全局对象是`window`
- 在Node.js环境中，全局对象是`global`

在严格模式下，全局环境中的this值为undefined：

```js
// 严格模式下
(function () {
  'use strict';
  console.log(this); // undefined
})();

// 非严格模式下
(function () {
  // 不使用严格模式
  console.log(this); // Window (浏览器) 或 global (Node.js)
})();
```

## 3. 对象方法中的this

当一个函数作为对象的方法被调用时，this指向调用该方法的对象。

```js
function test () {
  console.log(this.name);
}
const obj = {
  name: 'liam',
  foo: test,
};
obj.foo(); // liam
```

需要注意的是，this的绑定是在函数调用时确定的，而不是在函数定义时确定的。如果我们将对象方法赋值给一个变量，然后直接调用这个变量，this将不再指向原对象：

```js
const obj = {
  name: 'liam',
  foo () {
    console.log(this);
  },
};
const test = obj.foo;
test(); // Window (浏览器) 或 global (Node.js)
```

在上面的例子中，test直接指向了foo函数，与obj对象没有关系了，所以它是被当作一个普通函数直接调用，this指向全局对象。

总结：**this永远指向最后调用它的对象，也就是看它执行的时候是谁调用的**

## 4. 构造函数中的this

当一个函数通过new关键字调用时，它就成为了一个构造函数。此时，this指向新创建的实例对象。

```js
function Student (name) {
  this.name = name;
  console.log(this); // Student {name: '凉风'}
}
const result = new Student('凉风');
```

使用new操作符调用函数时，会自动执行以下步骤：

1. 创建一个全新的对象
2. 将新对象的__proto__链接到构造函数的prototype对象上
3. 将构造函数的this绑定到新创建的对象上
4. 执行构造函数中的代码
5. 如果构造函数没有显式返回对象，则返回新创建的对象

构造函数中的this指向新创建的实例对象：

```js
function Student (name) {
  this.name = name;
  // return function f () {};
  // return {};
}
const result = new Student('凉风');
console.log(result); // Student { name: '凉风' }
// 如果返回函数f，则result是函数f，如果是对象{}，则result是对象{}
```

## 5. 构造函数

```js
function Student (name) {
  this.name = name;
  console.log(this); // {name: '凉风'}
  // 相当于返回了
  // return this;
}
const result = new Student('凉风');
```

使用new操作符调用函数，会自动执行以下步骤

+ 创建了一个全新的对象
+ 这个对象会被执行[[Prototype]]（也就是__proto__）链接
+ 生成的新对象会绑定到函数调用的this
+ 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
+ 如果函数没有返回对象类型Object(包含Function, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象

由此可以知道：new操作符调用时，this指向生成的新对象

new调用时的返回值，如果没有显式返回对象或者函数，才是返回生成的新对象。

```js
function Student (name) {
  this.name = name;
  // return function f () {};
  // return {};
}
const result = new Student('凉风');
console.log(result); // { name: '凉风' }
// 如果返回函数f，则result是函数f，如果是对象{}，则result是对象{}
```

## 6. 事件绑定

事件绑定共有三种方式：行内绑定、动态绑定、事件监听；

行内绑定的两种情况：

```html
<input type="button" value="按钮" onclick="clickFun()">
<script>
  function clickFun () {
    console.log(this); // 此函数的运行环境在全局window对象下，因此this指向window;
  }
</script>​
<input type="button" value="按钮" onclick="this">
<!-- 运行环境在节点对象中，因此this指向本节点对象 -->
```

当事件触发时，属性值就会作为JS代码被执行，当前运行环境下没有clickFun函数，因此浏览器就需要跳出当前运行环境，在整个环境中寻找一个叫clickFun的函数并执行这个函数，所以函数内部的this就指向了全局对象window；如果不是一个函数调用，直接在当前节点对象环境下使用this，那么显然this就会指向当前节点对象；

动态绑定与事件监听：

```html
<button class="button">onclick</button>
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  </ul>
<script>
  let button = document.querySelector('button');
  button.onclick = function (ev) {
    console.log(this);
    console.log(this === ev.currentTarget); // true
  }
  let list = document.querySelector('.list');
  list.addEventListener('click', function (ev) {
    console.log(this === list); // true
    console.log(this === ev.currentTarget); // true
    console.log(this);
    console.log(ev.target);
  }, false);
</script>
```

onclick 和 addEventListener 是指向绑定事件的元素。

顺便提下：面试官也经常考察ev.currentTarget和ev.target的区别。

+ ev.currentTarget是绑定事件的元素，而ev.target是当前触发事件的元素。比如这里的分别是ul和li
+ 但也可能点击的是ul，这时ev.currentTarget和ev.target就相等了

## 7. 定时函数

```js​
const obj = {
  fun: function () {
    console.log(this);
  }
};
setInterval(obj.fun,1000); // this指向window对象
// 等价于
const extractedLogInfo = obj.fun;
setTimeout(extractedLogInfo);

setInterval('obj.fun()', 1000); // this指向obj对象
```

setInterval() 是window对象下内置的一个方法，接受两个参数，第一个参数允许是一个函数或者是一段可执行的 JS 代码，第二个参数则是执行前面函数或者代码的时间间隔；

在上面的代码中，setInterval(obj.fun,1000) 的第一个参数是obj对象的fun ，因为 JS 中函数可以被当做值来做引用传递，实际就是将这个函数的地址当做参数传递给了 setInterval 方法，换句话说就是 setInterval 的第一参数接受了一个函数，那么此时1000毫秒后，函数的运行就已经是在window对象下了，也就是函数的调用者已经变成了window对象，所以其中的this则指向的全局window对象；

而在 setInterval('obj.fun()',1000) 中的第一个参数，实际则是传入的一段可执行的 JS 代码；1000毫秒后当 JS 引擎来执行这段代码时，则是通过 obj 对象来找到 fun 函数并调用执行，那么函数的运行环境依然在 对象 obj 内，所以函数内部的this也就指向了 obj 对象；

## 8. call/apply/bind

fun.call(thisArg, arg1, arg2, ...)

thisArg是在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。

返回值是你调用的方法的返回值，若该方法没有返回值，则返回undefined。

apply和call类似。只是参数不一样。它的参数是数组（或者类数组）。

bind和call和apply类似，第一个参数也是修改this指向，只不过返回值是新函数，新函数也能当做构造函数（new）调用

## 9. 箭头函数中的this

### 9.1 箭头函数的特点

箭头函数是ES6引入的一种新的函数语法，它有一些重要特点：

1. 没有自己的this绑定，this值由外围最近一层非箭头函数决定（不可以改变this的绑定）
2. 不能用作构造函数，不能使用new调用
3. 没有arguments对象，形参名称不能重复
4. 没有prototype属性，没有原型对象
5. 不能用作Generator函数

### 9.2 箭头函数中的this绑定

箭头函数不会创建自己的this，它会捕获其所在上下文的this值，作为自己的this值：

```js
const name = 'window';
const student = {
  name: '凉风',
  doSth () {
    // 箭头函数中的this与doSth方法中的this相同
    const arrowDoSth = () => {
      console.log(this.name);
    };
    arrowDoSth();
  },
  // 对象字面量中的箭头函数，this指向全局对象
  arrowDoSth2: () => {
    console.log(this.name);
  },
};

student.doSth(); // '凉风'
student.arrowDoSth2(); // 'window'
```

### 9.3 箭头函数this不可变性

箭头函数的this值在定义时就确定了，无法通过call、apply或bind方法改变：

```js
const student = {
  name: '凉风',
  doSth() {
    console.log(this.name);
    return () => {
      console.log('arrowFn:', this.name);
    };
  },
};

const person = {
  name: 'person',
};

// 箭头函数的this不会被call改变
student.doSth().call(person); // '凉风'  'arrowFn:' '凉风'

// 但外层函数的this可以被call改变
student.doSth.call(person)(); // 'person' 'arrowFn:' 'person'
```

## 10. 事件处理中的this

在DOM事件处理中，this的指向取决于事件处理函数的绑定方式：

### 10.1 直接在HTML中绑定

```html
<!-- this指向绑定事件的元素 -->
<button onclick="console.log(this)">点击</button>
```

### 10.2 通过属性绑定

```js
const button = document.querySelector('button');

// this指向绑定事件的元素
button.onclick = function() {
  console.log(this); // button元素
};
```

### 10.3 使用addEventListener

```js
const button = document.querySelector('button');

// this指向绑定事件的元素
button.addEventListener('click', function() {
  console.log(this); // button元素
});

// 箭头函数中的this指向定义时的上下文
button.addEventListener('click', () => {
  console.log(this); // Window对象
});
```

## 11. 显式绑定this

JavaScript提供了call、apply和bind方法来显式绑定this：

```js
const person1 = { name: 'Alice', age: 25 };
const person2 = { name: 'Bob', age: 30 };

function introduce() {
  console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`);
}

// 使用call绑定this
introduce.call(person1); // "Hi, I'm Alice, I'm 25 years old."

// 使用apply绑定this
introduce.apply(person2); // "Hi, I'm Bob, I'm 30 years old."

// 使用bind创建新函数
const introduceAlice = introduce.bind(person1);
introduceAlice(); // "Hi, I'm Alice, I'm 25 years old."
```

## 12. this绑定优先级

当多个规则同时适用时，JavaScript按照以下优先级确定this的值：

1. **new绑定** - 优先级最高，使用new调用函数时，this指向新创建的对象
2. **显式绑定** - 通过call、apply或bind指定this值
3. **隐式绑定** - 作为对象方法调用时，this指向调用对象
4. **默认绑定** - 独立函数调用时，在非严格模式下this指向全局对象，严格模式下为undefined

```js
function foo() {
  console.log(this.a);
}

const obj1 = { a: 1, foo };
const obj2 = { a: 2, foo };

// 隐式绑定 vs 显式绑定
obj1.foo(); // 1
obj1.foo.call(obj2); // 2 (显式绑定优先级高于隐式绑定)

// new绑定 vs 隐式绑定
function Bar(name) {
  this.name = name;
}

const obj3 = { Bar };
const b1 = new obj3.Bar('凉风'); // this指向新创建的对象
console.log(b1.name); // '凉风'

// new绑定 vs 显式绑定
function Baz(name) {
  this.name = name;
}

const boundBaz = Baz.bind({ name: 'bound' });
// eslint-disable-next-line new-cap
const b2 = new boundBaz('凉风'); // this仍然指向新创建的对象，不是绑定的对象
console.log(b2.name); // '凉风'
```

## 13. 常见问题和注意事项

### 13.1 丢失绑定

在某些情况下，this绑定可能会丢失：

```js
const obj = {
  name: '凉风',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

// 直接赋值导致this丢失
const greetFunc = obj.greet;
greetFunc(); // "Hello, I'm undefined" (非严格模式) 或 TypeError (严格模式)

// 解决方案1：使用bind
const boundGreet = obj.greet.bind(obj);
boundGreet(); // "Hello, I'm 凉风"

// 解决方案2：使用箭头函数
const arrowGreet = () => obj.greet();
arrowGreet(); // "Hello, I'm 凉风"
```

### 13.2 回调函数中的this

在回调函数中，this的指向经常让人困惑：

```js
const obj = {
  name: '凉风',
  delayedGreet() {
    setTimeout(function() {
      console.log(`Hello, I'm ${this.name}`); // this指向全局对象
    }, 1000);
  },
  correctDelayedGreet() {
    // 使用箭头函数保持this绑定
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}`); // this指向obj对象
    }, 1000);
  },
};

obj.delayedGreet(); // "Hello, I'm undefined"
obj.correctDelayedGreet(); // "Hello, I'm 凉风"
```

### 13.3 数组方法中的this

数组方法如forEach、map等可以接受一个可选的thisArg参数：

```js
const obj = {
  name: '凉风',
  processItems() {
    const items = [1, 2, 3];

    // 不传递thisArg，this指向全局对象
    items.forEach(function(item) {
      console.log(`${this.name}: ${item}`); // undefined: 1, undefined: 2, undefined: 3
    });

    // 传递thisArg参数
    items.forEach(function(item) {
      console.log(`${this.name}: ${item}`); // 凉风: 1, 凉风: 2, 凉风: 3
    }, this);

    // 使用箭头函数
    items.forEach((item) => {
      console.log(`${this.name}: ${item}`); // 凉风: 1, 凉风: 2, 凉风: 3
    });
  },
};

obj.processItems();
```

## 14. 参考

+ [this - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

+ [JavaScript中的this](https://juejin.im/entry/5b8e6666518825430367172b)

+ [彻底搞懂JavaScript中的this指向问题](https://zhuanlan.zhihu.com/p/42145138)
