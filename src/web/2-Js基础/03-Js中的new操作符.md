---
meta:
  - name: description
    content: 深入理解JavaScript中的new操作符，包括其工作原理、执行步骤以及如何模拟实现
  - name: keywords
    content: JavaScript,new操作符,构造函数,原型链,模拟实现,前端开发
---
# JavaScript中的new操作符详解

## 1. new操作符的作用

new操作符是JavaScript中用于创建对象实例的关键字，特别是在面向对象编程中创建类的实例时使用。

## 2. new操作符的执行过程

当我们使用new调用一个函数（构造函数）时，会发生以下步骤：

1. 创建一个全新的空对象 `instance`（`instance = new Object()`）
2. 设置该对象的原型链，将对象的`__proto__`属性指向构造函数的`prototype`属性（设置原型链 `instance.__proto__ = F.prototype`）
3. 将构造函数中的`this`绑定到新创建的对象`instance`上
4. 执行构造函数中的代码（为新对象添加属性和方法）
5. 如果构造函数没有显式返回对象，则自动返回新创建的对象；如果显式返回对象，则返回该对象

```js
const newOperator = (ctor, ...rest) => {
  // 基于obj的原型创建一个新的对象
  const newObj = Object.create(ctor.prototype);

  // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
  const result = ctor.apply(newObj, rest);

  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof result === 'object' ? result : newObj;
};
```

## 3. 构造函数与原型链

在理解new操作符之前，我们需要先了解构造函数和原型链的概念。

构造函数是一种特殊的函数，用于创建特定类型的对象。在JavaScript中，任何函数都可以作为构造函数使用，只要通过new关键字调用它。

每个函数都有一个prototype属性，它指向一个对象，这个对象包含了可以被该函数的所有实例共享的属性和方法。

当使用new操作符调用构造函数时，新创建的对象会获得一个内部属性[[Prototype]]（在大多数浏览器中暴露为__proto__），该属性指向构造函数的prototype对象。

```js
// 构造函数示例
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 在原型上添加方法
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// 使用new创建实例
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.sayHello(); // "Hello, my name is Alice"
person2.sayHello(); // "Hello, my name is Bob"

// 验证原型链
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true
```

## 4. 完整的模拟实现

```js
/**
 * 模拟实现 new 操作符
 * @return { Object|Function|Regex|Date|Error }      [返回结果]
 */
const newOperator = (ctor, ...rest) => {
  if (typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }
  // ES6 new.target 是指向构造函数
  newOperator.target = ctor;
  // 1.创建一个全新的对象，
  // 2.并且执行[[Prototype]]链接
  // 通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
  const newObj = Object.create(ctor.prototype);

  // let newObj = new Object();
  // newObj.__proto__ = ctor.prototype;

  // 3.生成的新对象会绑定到函数调用的`this`。
  // 获取到ctor函数返回结果
  const ctorReturnResult = ctor.apply(newObj, rest);
  // 4.中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
  const isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
  const isFunction = typeof ctorReturnResult === 'function';
  if (isObject || isFunction) {
    return ctorReturnResult;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Function`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
};
```

## 5. new操作符的实际应用

new操作符在JavaScript开发中有着广泛的应用，特别是在面向对象编程中。

### 5.1 创建自定义对象实例

```js
// 定义构造函数
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
  };
}

// 使用new创建实例
const myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar.getInfo()); // "2022 Toyota Camry"
```

### 5.2 与ES6类的结合使用

虽然ES6引入了class语法，但其底层仍然使用构造函数和原型链：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// 使用new创建实例
const person = new Person('Alice', 25);
person.greet(); // "Hello, I'm Alice"
```

## 6. 注意事项和最佳实践

1. **始终使用new调用构造函数**：忘记使用new关键字会导致this指向全局对象，可能造成意外的全局变量污染。

2. **构造函数命名规范**：通常使用大写字母开头命名构造函数，以区别于普通函数。

3. **避免在构造函数中返回对象**：除非有特殊需求，否则不要在构造函数中显式返回对象，这会覆盖默认返回的新实例。

4. **利用new.target检测调用方式**：可以使用new.target来检测函数是否通过new调用：

```js
// 在函数中区分是否使用new进行调用
function User (name) {
  if (!new.target) {
    // 如果没有使用new调用，抛出错误或进行处理
    throw new Error('User must be called with new');
    // 或者自动加上new
    // return new User(name);
  }
  this.name = name;
}

// 不带 "new" 会抛出错误
// User('Alice'); // Error: User must be called with new

// 带 "new"：
const user = new User('Alice'); // 正常执行
```

## 7. 参考资料

- [MDN Web Docs - new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [JavaScript.info - Constructor, operator "new"](https://javascript.info/constructor-new)
