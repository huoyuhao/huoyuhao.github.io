---
meta:
  - name: description
    content: JavaScript请求AJAX
  - name: keywords
    content: JavaScript请求AJAX,AJAX,JavaScript,前端,AJAX请求,
---
# AJAX请求详解

## 1. AJAX基础概念

AJAX（Asynchronous JavaScript And XML）是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。它通过使用 XMLHttpRequest 对象与服务器通信，实现异步数据传输。

### 1.1 XMLHttpRequest对象

XMLHttpRequest 是 AJAX 的核心对象，用于在后台与服务器交换数据。

```js
// 现代浏览器都支持 XMLHttpRequest，不再需要兼容性代码
const xhr = new XMLHttpRequest();
```

### 1.2 XMLHttpRequest主要方法

#### open()方法

`xhr.open(method, url, async, user, password);` 方法初始化一个请求。

参数说明：
+ method：要使用的HTTP方法，如「GET」、「POST」、「PUT」、「DELETE」等
+ url：要向其发送请求的URL
+ async：可选布尔参数，表示是否异步执行操作，默认为true
+ user：可选用户名用于认证用途
+ password：可选密码用于认证用途

#### setRequestHeader()方法

`xhr.setRequestHeader(header, value);` 用于设置HTTP请求头部，必须在 open() 方法和 send() 之间调用。

```js
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

#### send()方法

`xhr.send(body)` 方法用于发送 HTTP 请求。
+ 对于异步请求（默认），此方法立即返回
+ 对于同步请求，此方法直到响应到达后才会返回

### 1.3 XMLHttpRequest事件处理

#### onreadystatechange事件

`xhr.onreadystatechange = callback;` 当 readyState 属性改变时触发回调函数。

#### readyState属性值

readyState 属性表示请求/响应阶段，共有5个值：

+ 0：请求未初始化，未调用 open() 方法
+ 1：服务器连接已建立，已调用 open() 方法
+ 2：请求已接收，已调用 send() 方法
+ 3：请求处理中，已接收部分响应
+ 4：请求已完成，已接收全部响应

### 1.4 XMLHttpRequest重要属性

| 属性名 | 含义 |
| --- | --- |
| responseText | 服务端返回的文本信息 |
| responseXML | 服务端返回的XML DOM文档 |
| status | HTTP状态码 |
| statusText | HTTP状态码说明 |
| readyState | xhr对象的请求响应阶段 |

## 2. AJAX请求示例

### 2.1 发送GET请求

GET请求通常用于从服务器获取数据，参数通过URL传递。

```js
const xhr = new XMLHttpRequest();
// 初始化GET请求，参数通过URL传递
xhr.open('GET', `www.example.php?query=test&timestamp=${ Date.now()}`);
xhr.send(); // GET请求不需要发送请求体

xhr.onreadystatechange = function() {
  // 当请求完成且响应就绪时
  if (xhr.readyState === 4) {
    // 检查HTTP状态码是否成功
    if (xhr.status === 200) {
      // 处理服务器返回的文本数据
      console.log(xhr.responseText);
    } else {
      // 处理错误情况
      console.error(`请求失败，状态码：${ xhr.status}`);
    }
  }
};
```

### 2.2 发送POST请求

POST请求通常用于向服务器发送数据，数据通过请求体传递。

```js
const xhr = new XMLHttpRequest();
// 初始化POST请求
xhr.open('POST', 'www.example.php');
// 设置请求头，指定发送数据的格式
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 发送请求体数据
xhr.send('query=test&name=example');

xhr.onreadystatechange = function() {
  // 当请求完成且响应就绪时
  if (xhr.readyState === 4) {
    // 检查HTTP状态码是否成功
    if (xhr.status === 200) {
      // 解析并处理JSON格式的响应数据
      console.log(JSON.parse(xhr.responseText));
    } else {
      // 处理错误情况
      console.error(`请求失败，状态码：${ xhr.status}`);
    }
  }
};
```

## 3. AJAX封装实现

以下是一个基于Promise的AJAX封装实现，提供了更简洁的API和更好的错误处理：

```js
/**
 * AJAX请求封装函数
 * @param {Object} options - 请求配置选项
 * @param {string} options.url - 请求URL
 * @param {string} options.method - 请求方法（GET/POST等）
 * @param {Object} options.data - 请求数据
 * @param {boolean} options.async - 是否异步执行，默认true
 * @param {number} options.timeout - 超时时间（毫秒）
 * @returns {Promise} 返回Promise对象
 */
const ajax = (options) => {
  // 解构配置选项，设置默认值
  let { url } = options;
  const method = options.method?.toLocaleLowerCase() || 'get';
  const async = options.async !== false; // 默认为异步
  const { data } = options;
  const xhr = new XMLHttpRequest();

  // 设置超时时间
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout;
  }

  // 返回Promise对象以支持链式调用
  return new Promise((resolve, reject) => {
    // 超时处理
    xhr.ontimeout = () => {
      reject(new Error('请求超时'));
    };

    // 请求状态改变事件处理
    xhr.onreadystatechange = () => {
      // 当请求完成时
      if (xhr.readyState === 4) {
        // 判断请求是否成功
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          // 成功则resolve响应文本
          resolve(xhr.responseText);
        } else {
          // 失败则reject错误信息
          reject(new Error(`请求失败，状态码：${xhr.status}`));
        }
      }
    };

    // 网络错误处理
    xhr.onerror = (err) => {
      reject(new Error('网络错误'));
    };

    // 处理请求数据
    let encodeData = '';
    if (data instanceof Object) {
      const paramArr = [];
      Object.keys(data).forEach((key) => {
        // 对参数进行编码以防止特殊字符问题
        paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
      });
      encodeData = paramArr.join('&');
    }

    // GET请求处理：将数据拼接到URL
    if (method === 'get') {
      // 检测URL中是否已存在查询参数
      const index = url.indexOf('?');
      if (index === -1) url += '?';
      else if (index !== url.length - 1) url += '&';
      // 拼接查询参数
      url += encodeData;
    }

    // 初始化请求
    xhr.open(method, url, async);

    // 根据请求方法处理
    if (method === 'get') {
      // GET请求不发送请求体
      xhr.send(null);
    } else {
      // POST等请求需要设置请求头并发送数据
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
      xhr.send(encodeData);
    }
  });
};
```
