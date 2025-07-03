---
meta:
  - name: description
    content: 前端location使用
  - name: keywords
    content: 前端location使用,JavaScript,前端,location使用,location
---
# 前端location使用

## 1. 当前URL新增query参数

```js
const url = new URL(window.location.href);
url.searchParams.set('newParam', 'newValue');
// 更新浏览器地址栏
window.history.pushState({}, '', url);
// 刷新页面
window.location.reload();
```