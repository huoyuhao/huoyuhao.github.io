---
meta:
  - name: description
    content: JavaScript的Set-Map
  - name: keywords
    content: JavaScript的Set-Map,Set,Map,WeakMap,weakSet,前端,
---
# JavaScript的Set与Map详解

## 1. Set数据结构详解

ES6引入了Set数据结构，它类似于数组，但具有一个重要特性：所有成员值都是唯一的，不存在重复元素。Set本质上是一个构造函数，用于创建Set实例。

### 1.1 Set的基本属性与方法

+ `new Set(iterable)` - 创建一个Set实例。如果提供了一个可迭代对象（通常是数组），将从该对象复制值到Set中，自动去除重复元素
+ `size` - 返回Set中元素的数量
+ `add(value)` - 向Set中添加一个新元素，返回Set本身（支持链式调用）
+ `delete(value)` - 从Set中删除指定元素，删除成功返回true，否则返回false
+ `has(value)` - 检查Set中是否包含指定元素，返回布尔值
+ `clear()` - 清空Set中的所有元素，无返回值

### 1.2 Set的遍历方法

+ `keys()` - 返回一个迭代器对象，包含Set中所有元素的键（在Set中键和值相同）
+ `values()` - 返回一个迭代器对象，包含Set中所有元素的值
+ `entries()` - 返回一个迭代器对象，包含Set中所有元素的键值对（键和值相同）
+ `forEach(callbackFn[, thisArg])` - 使用回调函数遍历Set中的每个元素

```js
// 创建一个包含三种颜色的Set实例
const set = new Set(['red', 'green', 'blue']);

// 使用keys()方法遍历Set中的所有键
for (const item of set.keys()) {
  console.log(item);
}
// 输出: red green blue

// 使用values()方法遍历Set中的所有值
for (const item of set.values()) {
  console.log(item);
}
// 输出: red green blue

// 使用entries()方法遍历Set中的所有键值对
for (const item of set.entries()) {
  console.log(item);
}
// 输出: ["red", "red"] ["green", "green"] ["blue", "blue"]
```

### 1.3 Set与Array的对比

+ **元素唯一性**：Array允许重复元素，而Set自动去除重复元素，可以利用这个特性实现数组去重
+ **查找性能**：Set的`has()`方法时间复杂度为O(1)，而Array的`indexOf()`方法时间复杂度为O(n)，在大量数据查找时Set性能更优
+ **删除操作**：Set通过`delete()`方法可以直接删除指定元素，而Array需要先查找索引再使用`splice()`方法，Set的操作更便捷
+ **数据转换**：Array拥有丰富的函数式方法如`map()`、`filter()`、`some()`、`every()`等，而Set没有这些方法，但两者可以相互转换使用

### 1.4 WeakSet详解

WeakSet结构与Set类似，也是一个不包含重复元素的集合，但具有以下特殊特性：

**1. 成员类型限制**：WeakSet的成员只能是对象（而非原始值），尝试添加非对象成员会抛出错误。

```js
// 错误示例：尝试将数组作为WeakSet的成员
const b = [1, 2, [1, 2]];
new WeakSet(b); // Uncaught TypeError: Invalid value used in weak set

// 正确示例：将对象作为WeakSet的成员
const obj1 = {};
const obj2 = {};
const weakSet = new WeakSet([obj1, obj2]);
```

**2. 弱引用特性**：WeakSet中的对象都是弱引用，这意味着垃圾回收机制不会考虑WeakSet对该对象的引用。如果其他地方没有引用该对象，垃圾回收机制会自动回收该对象所占用的内存，而无需手动删除WeakSet中的引用。

**3. 应用场景**：由于弱引用特性，WeakSet常用于存储DOM节点，当DOM节点被删除时，相关引用会自动消失，避免内存泄漏。

**4. 限制性**：WeakSet不可迭代，因此不能使用for-of等循环；没有size属性；不支持clear()方法。

### 1.5 Set的实际应用

#### 1.5.1 使用Array.from将Set转换为数组

`Array.from` 方法可以将Set结构转换为数组，这在需要使用数组方法时非常有用：

```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
console.log(array); // [1, 2, 3, 4, 5]
```

#### 1.5.2 数组去重

利用Set成员唯一的特性，可以轻松实现数组去重：

```js
// 去除数组的重复成员
const array = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArray1 = [...new Set(array)];
console.log(uniqueArray1); // [1, 2, 3, 4, 5]

const uniqueArray2 = Array.from(new Set(array));
console.log(uniqueArray2); // [1, 2, 3, 4, 5]
```

#### 1.5.3 实现集合运算（并集、交集、差集）

Set可以方便地实现数学中的集合运算：

```js
const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

// 并集：包含两个集合中的所有元素
const union = new Set([...a, ...b]);
console.log(union); // Set {1, 2, 3, 4}

// 交集：只包含两个集合共有的元素
const intersect = new Set([...a].filter((x) => b.has(x)));
console.log(intersect); // Set {2, 3}

// 差集：包含在集合a中但不在集合b中的元素
const difference = new Set([...a].filter((x) => !b.has(x)));
console.log(difference); // Set {1}
```

## 2. Map数据结构详解

### 2.1 Map的基本属性与方法

+ `new Map(iterable)` - 创建一个Map实例。如果提供了一个可迭代对象（通常是二维数组），将从该对象复制键值对到Map中
+ `size` - 返回Map中键值对的数量
+ `set(key, value)` - 设置键值对，如果键已存在则更新值，返回Map本身（支持链式调用）
+ `get(key)` - 获取指定键对应的值，如果不存在则返回undefined
+ `has(key)` - 检查Map中是否包含指定键，返回布尔值
+ `delete(key)` - 删除指定键及其对应的值，删除成功返回true，否则返回false
+ `clear()` - 清空Map中的所有键值对，无返回值

```js
const map = new Map();

map.set('1', 'str1'); // 字符串键
map.set(1, 'num1'); // 数字键
map.set(true, 'bool1'); // 布尔值键

// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.size); // 3
```

Map 使用 SameValueZero 算法来比较键是否相等。它和严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。

这个算法不能被改变或者自定义。

### 2.2 Map的遍历方法

+ `keys()` - 返回一个迭代器对象，包含Map中所有键
+ `values()` - 返回一个迭代器对象，包含Map中所有值
+ `entries()` - 返回一个迭代器对象，包含Map中所有键值对
+ `forEach(callbackFn[, thisArg])` - 使用回调函数遍历Map中的每个键值对

```js
// 创建一个存储食谱的Map实例
const recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// 使用keys()方法遍历Map中的所有键
for (const vegetable of recipeMap.keys()) {
  console.log(vegetable); // 输出: cucumber tomatoes onion
}

// 使用values()方法遍历Map中的所有值
for (const amount of recipeMap.values()) {
  console.log(amount); // 输出: 500 350 50
}

// 使用entries()方法遍历Map中的所有键值对
for (const entry of recipeMap.entries()) {
  console.log(entry); // 输出: ['cucumber', 500] ['tomatoes', 350] ['onion', 50]
}

// 直接遍历Map实例等同于调用entries()方法
for (const entry of recipeMap) {
  console.log(entry); // 输出: ['cucumber', 500] ['tomatoes', 350] ['onion', 50]
}
```

### 2.3 Map与Object的对比

+ **键的类型**：Object的键只能是字符串或Symbol，而Map的键可以是任意类型（包括对象、函数等）
+ **键值对顺序**：Map中的键值对是有序的，按插入顺序排列；而Object的键值对在ES6之前是无序的（ES6之后字符串键按插入顺序，但数字键会排在前面）
+ **大小获取**：Map通过`size`属性直接获取键值对数量；Object需要通过`Object.keys(obj).length`等方式手动计算
+ **原型污染**：Object有原型链，可能会与自定义键名冲突；Map无原型链，不会出现这种情况
+ **性能特性**：在频繁增删键值对的场景下，Map的性能通常优于Object

### 2.4 WeakMap详解

WeakMap结构与Map类似，也是一个键值对的集合，但具有以下特殊特性：

**1. 键名限制**：WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

```js
// 错误示例：尝试使用字符串作为WeakMap的键
const wm1 = new WeakMap();
wm1.set('key', 'value'); // Uncaught TypeError: Invalid value used as weak map key

// 正确示例：使用对象作为WeakMap的键
const wm2 = new WeakMap();
const obj = {};
wm2.set(obj, 'value');
```

**2. 弱引用特性**：WeakMap的键名是弱引用，这意味着垃圾回收机制不会考虑WeakMap对该对象的引用。如果其他地方没有引用该对象，垃圾回收机制会自动回收该对象所占用的内存，而无需手动删除WeakMap中的引用。

**3. 应用场景**：由于弱引用特性，WeakMap常用于存储对象的私有数据或避免内存泄漏。

**4. 限制性**：WeakMap不可遍历，因此不支持`keys()`、`values()`和`entries()`方法；没有`size`属性；不支持`clear()`方法。可用方法仅有`get()`、`set()`、`has()`和`delete()`。

### 2.5 Map的实际应用

#### 2.5.1 使用Object.entries将对象转换为Map

`Object.entries()`方法可以将对象转换为键值对数组，进而创建Map实例：

```js
// 定义一个用户对象
const user = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// 使用Object.entries将对象转换为Map
const userMap = new Map(Object.entries(user));

console.log(userMap.get('name')); // John
console.log(userMap.size); // 3
```

#### 2.5.2 使用Object.fromEntries将Map转换为对象

`Object.fromEntries()`方法的作用是将包含[key, value]键值对的可迭代对象（如Map）转换为普通对象：

```js
// 创建一个存储商品价格的Map
const priceMap = new Map();
priceMap.set('banana', 1.2);
priceMap.set('orange', 0.8);
priceMap.set('apple', 1.5);

// 使用Object.fromEntries将Map转换为对象
const priceObj = Object.fromEntries(priceMap);

console.log(priceObj); // { banana: 1.2, orange: 0.8, apple: 1.5 }
console.log(priceObj.orange); // 0.8
```

#### 2.5.3 Map在缓存中的应用

Map非常适合用于实现缓存机制，因为它可以使用任意类型作为键：

```js
// 创建一个缓存Map
const cache = new Map();

// 缓存函数计算结果
function calculate(n) {
  // 检查缓存中是否已有结果
  if (cache.has(n)) {
    console.log('从缓存中获取结果');
    return cache.get(n);
  }

  // 模拟复杂计算
  const result = n * 2;

  // 将结果存入缓存
  cache.set(n, result);
  console.log('计算并缓存结果');
  return result;
}

console.log(calculate(5)); // 计算并缓存结果
// 10
console.log(calculate(5)); // 从缓存中获取结果
// 10
```

## 3. 参考文章

[Map and Set（映射和集合）](https://zh.javascript.info/map-set)

[彻底弄懂ES6中的Map和Set](https://juejin.cn/post/6844903855302377486)

[你真的了解ES6的Set，WeakSet，Map和WeakMap吗？](https://juejin.cn/post/6844904191610060814)
