---
meta:
  - name: description
    content: 前端console学习
  - name: keywords
    content: 前端console学习,console,console.log,前端日志
---
# 前端console日志打印

## 1. console 打印方法

### 1.1 log\info

`console.info` 和 `console.log` 的作用是几乎完全一样的，也是在控制台中打印信息，只不过打印时的样式可能与 console.log 略有区别。

在这里需要说明一下，Console 对象并不是javascript的内置对象，而是浏览器的内置对象，因此在控制台中的输出样式和各浏览器相关。

部门浏览器的输出样式可能会有所不同，比如info信息输出的前面会有一个小图标，表示这是一个信息提示。

### 1.2 error

`console.error` 用于打印错误信息，通常会以红色字体显示，并且在控制台中会有一个小图标表示这是一个错误提示。

### 1.3 warn

`console.warn` 用于打印警告信息，通常会以黄色字体显示，并且在控制台中会有一个小图标表示这是一个警告提示。

![console日志打印](/img/console日志打印-1.jpg)

### 1.4 table

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

### 1.5 count

`console.count` 用于统计代码被执行的次数，可以接受一个字符串作为参数，表示该计数器名称，如果不传参数，则默认为 default。

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

### 1.6 clear

`console.clear` 用于清空控制台，在控制台中打印信息时，如果信息过多，可以使用该方法清空控制台。

### 1.7 group

`console.group` 用于将控制台中的输出信息分组，可以接受一个字符串作为参数，表示该分组的名称。

```js
console.group('group1');
console.log('group1-1');
console.log('group1-2');
console.groupEnd();
console.group('group2');
console.log('group2-1');
console.log('group2-2');
console.groupEnd();
```

目前发现谷歌浏览器适应性不是很好

### 1.8 trace

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

### 1.9 assert

`console.assert` 用于断言，如果第一个参数为 false，则打印第二个参数的值，否则不打印，并且以error提示的形式输出

```js
console.assert(false, '输出内容1');
console.assert(true, '输出内容2');
```

### 1.10 time

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

## 2. console 打印样式

`console.log()` 还可以利用以下通配符发挥特殊作用

### 2.1 %c 用于添加样式

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

### 2.2 %o or %O：用于以对象格式打印

在字符串中加入`%o` 或者 `%O`，可以将字符串后紧接着的对象插入到字符串中

### 2.3 %d or %i：用于以数字格式打印

`%d` or `%i`可以将其之后紧随的字符作为整数输出，类似于`toFixed(0)`

转换类数字的字符串也是可以，逻辑与js字符串转换数字一致

### 2.4 %s：用于以字符串格式打印

`%s`可以将其之后紧随的字符作为字符串输出，类似于`toString()`

### 2.5 %j or %j：用于以json格式打印

`%j`可以将其之后紧随的字符作为json对象输出，类似于`JSON.stringify()`
```js
console.log('%c', 'color: red'); // color: red
console.log('%o', { a: 1 }); // {a: 1}
console.log('%d', 123.34); // 123
console.log('输出为整数%i', '1.99'); // 1
console.log('你好，世界！%s', 'hello world'); // 你好，世界！hello world
```

## 3. 参考文献

[啥玩意儿？console.log 还能加样式？？?](https://juejin.cn/post/7100900573624401951)
