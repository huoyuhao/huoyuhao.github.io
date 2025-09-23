---
title: Console打印
author: 火雨
createTime: 2024/03/26 12:00
---

# Console打印

## 1. console打印方法

### 1.1 console.log() / console.info()

用于输出普通信息

```js
console.log('这是一条普通信息');
console.info('这是一条普通信息');
```

### 1.2 console.error()

用于输出错误信息，会以红色显示

```js
console.error('这是一条错误信息');
```

### 1.3 console.warn()

用于输出警告信息，通常会以黄色字体显示，并且在控制台中会有一个小图标表示这是一个警告提示。

```js
console.warn('这是一条警告信息');
```

![console日志打印](/img/console日志打印-1.jpg)

### 1.4 console.table()

`console.table` 将复合数据类型（对象，数组等）在控制台中以表格的形式打印输出，并且你可以将对象数组嵌套乃至结合使用，他都能够将其解析为表格形式

```js
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
    },
  },
};
console.table(obj);

const arr = [1, 2, 3];
console.table(arr);
const data = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
];
console.table(data);
```

对象属性打印最多只能展示两层

![console日志打印](/img/console日志打印-2.jpg)

### 1.5 console.group() / console.groupEnd()

用于分组显示信息

```js
console.group('用户信息');
console.log('姓名: 张三');
console.log('年龄: 25');
console.groupEnd();
```

目前发现谷歌浏览器适应性不是很好

### 1.6 console.time() / console.timeEnd()

`console.time` 和 `console.timeEnd` 两个方法是结合在一起使用的，他们接受一个相同的参数，输出两句表达式中间的代码的执行时间

```js
console.time('计时器1');
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    console.log('计数中...');
  }
}
console.timeEnd('计时器1'); // 计时器1: 4.541015625 ms
```

`console.time` 和 `console.timeEnd` 接收的参数不止可以是字符串，可以是任何类型，也可以是变量，甚至这种传入两个“长相相同”的引用类型也可以。
他会对传入的对象执行toString()方法作为最终的打印名称。

### 1.7 console.count()

`console.count` 用于统计代码被执行的次数，可以接受一个字符串作为参数，表示该计数器名称，如果不传参数，则默认为 default。

```js
function sayHello() {
  console.count('调用次数');
}
sayHello(); // 调用次数: 1
sayHello(); // 调用次数: 2
```

```js
for (let i = 0; i < 10; i++) {
  console.count('default');
}
console.count('content1');
console.count('content1');
const a = { a: 1 };
console.count(a); // [object Object]: 1
console.count(a); // [object Object]: 2
console.count({ a: 1 }); // [object Object]: 3
console.count([]); // : 1
console.count([2]); // 2: 1
console.count([2, 4]); // 2,4: 1
```

可以根据打印结果看到，这边会根据输入内容转为string，然后在进行缓存计数，所以相同的内容会进行累加计数。

### 1.8 console.trace()

`console.trace` 用于打印代码的调用栈信息，可以接受一个字符串作为参数，表示该调用栈的名称。

```js
function foo() {
  console.trace('foo');
}
function bar() {
  foo();
}
function baz() {
  bar();
}
baz();
```

![console日志打印](/img/console日志打印-3.jpg)

### 1.9 console.assert()

`console.assert` 用于断言，如果第一个参数为 false，则打印第二个参数的值，否则不打印，并且以error提示的形式输出

```js
console.assert(1 === 2, '1不等于2');
```

### 1.10 console.clear()

用于清空控制台

```js
console.clear();
```

## 2. console打印样式

### 2.1 %c

可以把输出的语句看做是一个节点，常见的color、font、padding等 css 属性都可以使用。具体用法是在需要添加样式的字符串前加入%c匹配符，紧接着的第二个参数用于定义样式。请看以下示例：

```js
console.log(
  '特殊样式%c 样式一 %c 样式二 %c 样式三',
  'padding: 2px; background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%); color: #FFF;',
  'padding: 2px; background-color: #b621fe; color: #FFF;',
  'padding: 2px; background-color: #1fd1f9; color: #FFF;',
  '1231'
);
```

### 2.2 %o

用于输出对象

```js
const obj = { name: '张三', age: 25 };
console.log('对象信息: %o', obj);
```

### 2.3 %d

用于输出数字

```js
console.log('数字: %d', 123);
```

### 2.4 %s

用于输出字符串

```js
console.log('字符串: %s', 'Hello');
```

### 2.5 %f

用于输出浮点数

```js
console.log('浮点数: %f', 3.14);
```

### 2.6 %j or %j：用于以json格式打印

`%j`可以将其之后紧随的字符作为json对象输出，类似于`JSON.stringify()`

```js
console.log('%c', 'color: red'); // color: red
console.log('%o', { a: 1 }); // {a: 1}
console.log('%d', 123.34); // 123
console.log('输出为整数%i', '1.99'); // 1
console.log('你好，世界！%s', 'hello world'); // 你好，世界！hello world
```

## 3. 参考文献

- [啥玩意儿？console.log 还能加样式？？?](https://juejin.cn/post/7100900573624401951)
