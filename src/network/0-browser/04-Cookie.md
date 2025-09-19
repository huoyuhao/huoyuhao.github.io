---
meta:
  - name: description
    content: 前端Cookie
  - name: keywords
    content: 前端Cookie,Cookie,前端
---
# 前端Cookie

## 1. 介绍

Cookie 是服务器保存在浏览器的一小段文本，浏览器每次向服务器发送请求时都会携带这段文本，主要用来识别用户身份。Cookie 通常用来完成以下功能：

+ 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
+ 个性化设置（如用户自定义设置、主题等）
+ 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie 是持久的，当浏览器关闭后，Cookie 通常不会被清除（除非设置为会话期Cookie）。

## 2. 原理

Cookie 的工作原理如下：

1. 客户端发送请求到服务端
2. 服务端设置 Cookie，通过响应头 Set-Cookie 字段返回给客户端
3. 客户端收到响应后，将 Cookie 保存在浏览器中
4. 客户端再次发送请求到服务端时，会通过请求头 Cookie 字段携带 Cookie 信息

![Cookie原理](/img/Cookie原理.png)

需要注意的是，Cookie 不仅会在请求静态资源时携带，在请求动态资源时也会携带，所以在使用 Cookie 时需要注意大小和数量，避免影响性能。

## 3. 参数说明

+ **name**：cookie的名称
+ **value**：cookie的值
+ **size**：cookie的大小
+ **domain**：可以访问此cookie的域名
+ **path**：可以访问此cookie的页面路径
+ **expires/Max-Age**：cookie超时时间
+ **HttpOnly**：是否只允许服务端访问，规定无法通过 `JS 脚本` 读取到该 cookie 的信息，只有在http请求头中会带有此cookie的信息
+ **secure**：是否只在https的时候才发送
+ **SameSite**：是否在跨站请求时发送

其中需要特别注意的是 **secure** 属性，它表示cookie是否仅在HTTPS安全通信时才发送给服务端。在HTTP协议下设置secure属性的cookie会被浏览器忽略。


SameSite属性详解

SameSite属性用于控制Cookie在跨站请求时是否发送，有三个可选值：

+ **Strict**：完全禁止第三方Cookie，跨站点时任何情况下都不会发送Cookie
+ **Lax**：部分禁止第三方Cookie，导航到目标网址的Get请求除外（如链接、预加载请求等）
+ **None**：任何情况下都会发送Cookie，但必须同时设置Secure属性

## 4. 同源策略

### 4.1 顶级域名

顶级域名只能设置domain为顶级域名，不能设置为二级域名或者三级域名等等，否则cookie无法生成

比如`huoyuhao.com`能设置domain为`huoyuhao.com`或者`www.huoyuhao.com`，但不能设置domain为`blog.huoyuhao.com`，这样cookie不会生成。

cookie不可跨域

顶级域名设置的cookie可以共享【需要指定domain主域名的host】给二级域名，也可以自己私有【不指定domain】

### 4.2 二级域名

设置cookie的话只能在本域名下或者domain级别高于自身的域名下才会生效

### 4.3 读取COOKIE

+ 二级域名能读取设置了domain为顶级域名或者自身的cookie，不能读取其他二级域名domain的cookie。例如：要想cookie在多个二级域名中共享，需要设置domain为顶级域名，这样就可以在所有二级域名里面或者到这个cookie的值了。

+ 顶级域名只能获取到domain设置为顶级域名的cookie，domain设置为其他子级域名的无法获取。


## 5. 使用示例

```js
// 获取cookie
function getCookie(name) {
  const reg = new RegExp(`(^| )${ name }=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) return unescape(arr[2]);
  return null;
}

// 设置cookie
function setCookie(name, value, expireDays) {
  const exDate = new Date();
  exDate.setDate(exDate.getDate() + expireDays);
  document.cookie = `${name }=${ escape(value) }${(expireDays === null) ? '' : `;expires=${ exDate.toGMTString()}`}`;
}

// 删除cookie
function delCookie(name) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const value = getCookie(name);
  if (value !== null) document.cookie = `${name }=${ value };expires=${ exp.toGMTString()}`;
}

// 设置带路径和域名的Cookie
function setCookieWithDomain(name, value, domain, path, expireDays) {
  const exDate = new Date();
  exDate.setDate(exDate.getDate() + expireDays);
  document.cookie = `${name }=${ escape(value)
  }${(expireDays === null) ? '' : `;expires=${ exDate.toGMTString()}`
  }${(domain === null) ? '' : `;domain=${ domain}`
  }${(path === null) ? '' : `;path=${ path}`}`;
}
```

## 6. 安全性考虑

### 6.1 HttpOnly属性

设置HttpOnly属性可以防止客户端脚本访问Cookie，有效防范XSS攻击：

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure
```

### 6.2 Secure属性

确保Cookie只在HTTPS连接中传输，防止中间人攻击：

```http
Set-Cookie: sessionId=abc123; Secure; HttpOnly
```

### 6.3 SameSite属性

使用SameSite属性防范CSRF攻击：

```http
Set-Cookie: sessionId=abc123; SameSite=Lax; Secure
```

### 6.4 Cookie大小限制

单个Cookie大小不能超过4KB，每个域名下最多可存储50个Cookie。过多的Cookie会影响请求性能。

## 7.实际应用场景

### 7.1 用户身份认证

```js
// 登录成功后设置认证Cookie
function setAuthCookie(token) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // 7天过期

  document.cookie = `authToken=${token}; expires=${expires.toUTCString()}; path=/; secure; httponly; samesite=lax`;
}

// 检查用户是否已登录
function isAuthenticated() {
  return !!getCookie('authToken');
}
```

### 7.2 购物车数据存储

```js
// 保存购物车数据到Cookie
function saveCartToCookie(cartItems) {
  const cartData = JSON.stringify(cartItems);
  setCookie('cart', cartData, 30); // 30天过期
}

// 从Cookie读取购物车数据
function getCartFromCookie() {
  const cartData = getCookie('cart');
  return cartData ? JSON.parse(cartData) : [];
}
```

### 7.3 用户偏好设置

```js
// 保存用户主题偏好
function saveThemePreference(theme) {
  setCookie('theme', theme, 365); // 一年过期
}

// 获取用户主题偏好
function getThemePreference() {
  return getCookie('theme') || 'light'; // 默认light主题
}
```

## 8. Cookie与Storage的区别

| 特性 | Cookie | localStorage | sessionStorage |
| --- | --- | --- | --- |
| 生命周期 | 可设置过期时间 | 永久存储 | 页面会话期间 |
| 存储大小 | 4KB | 5MB | 5MB |
| 与服务端通信 | 每次请求都会携带 | 仅客户端存储 | 仅客户端存储 |
| 访问方式 | HTTP头自动携带 | JavaScript API | JavaScript API |
| 安全性 | 支持HttpOnly、Secure等属性 | 无特殊安全属性 | 无特殊安全属性 |

## 9. 最佳实践

1. **最小化Cookie使用**：只存储必要的信息，避免存储大量数据
2. **设置合适的过期时间**：根据业务需求设置合理的过期时间
3. **使用安全属性**：在HTTPS环境中使用Secure和HttpOnly属性
4. **防范CSRF攻击**：使用SameSite属性
5. **定期清理**：及时删除不需要的Cookie
6. **敏感信息保护**：避免在Cookie中存储敏感信息，如密码等

【参考文章】

[Document.cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

[MDN Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)

[Cookie SameSite](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

[Web安全之Cookie安全性](https://www.cnblogs.com/lhj588/p/11299634.html)
