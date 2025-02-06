---
meta:
- name: description
  content: Vue基础总结
- name: keywords
  content: Vue基础总结,Vue,Vue2,Vue3,VUE
---

# Vue基础总结

## 1. SPA

单页应用（Single Page Application），只有一个完整的页面，在页面初始化加载的时候，通过ajax异步请求加载页面所需的数据，页面跳转时，通过路由控制显示不同的页面组件，无需刷新页面，页面跳转更加流畅，用户体验好。

### 优缺点

+ 具有桌面应用的即时性、网站的可移植性和可访问性
+ 用户体验好、快，内容的改变不需要重新加载整个页面
+ 良好的前后端分离，分工更明确
+ 开发灵活高效，易于开发调试
+ 后台API通用化
+ 减少服务器负载
+ 首屏加载慢
+ SEO难度大，不利于搜索引擎优化

### 实现原理

+ 监听地址栏中hash变化驱动界面变化
+ 用pushsate记录浏览器的历史，驱动界面发送变化

```js
// 定义 Router
class Router {
  constructor () {
    this.routes = {}; // 存放路由path及callback
    this.currentUrl = '';
    // 监听路由change调用相对应的路由回调
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  route(path, callback) {
    this.routes[path] = callback;
  }

  push(path) {
    this.routes[path] && this.routes[path]();
  }
}
// 使用 router
window.miniRouter = new Router();
miniRouter.route('/', () => console.log('page1'));
miniRouter.route('/page2', () => console.log('page2'));

miniRouter.push('/'); // page1
miniRouter.push('/page2'); // page2
```

history模式核心借用 HTML5 history api，api提供了丰富的 router

相关的api
+ history.pushState 浏览器历史纪录添加记录
+ history.replaceState 修改浏览器历史纪录中当前纪录
+ history.popState 当history发生变化时触发

### SPA - SEO

市场上大部分信息类网站根本就不是SPA（Single Page Application），本来就不需要用React／Vue这些东西折腾自己。这种网站就是后台渲染，组装页面，对SEO最友好，其它方面的开发也要简单许多

这两种方法都达到了实现URL静态化，达到SEO效果
+ SSR服务端渲染，将组件或页面通过服务器生成html，再返回给浏览器，如 nuxt.js
+ 静态化
  + 通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中
  + 另外一种是通过WEB服务器的 `URL Rewrite` 方式，原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的

使用Phantomjs针对爬虫处理
+ 原理是通过`Nginx`配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个`node server`，再通过`PhantomJS`来解析完整的`HTML`，返回给爬虫

![DNS解析过程](/img/Vue基础总结-SPA SEO方式.png)

+ 完全不用改动项目代码，按原本的SPA开发即可，对比开发SSR成本小不要太多
+ 部署需要node服务器支持；
+ 爬虫访问比网页访问要慢一些，因为要定时资源加载完成才返回给爬虫；
+ 如果被恶意模拟百度爬虫大量循环爬取，会造成服务器负载方面问题，解决方法是判断访问的IP，是否是百度官方爬虫的IP

### SPA MPA区别

内容 | SPA | MPA(多页面应用)
--- | --- | ---
组成 | 单个页面 | 多个页面
资源共用 | 共用，只需外壳部分加载 | 不共用，每个页面都需要加载（浏览器强缓存）
刷新方式 | 局部页面刷新或更改 | 整页刷新
URL模式 | hash\/history | history
用户体验 | 页面切换块，体验良好 | 页面切换慢，体验差
转场动画 | 容易实现 | 无法实现
数据传递 | 容易 | 依赖URL或者cookie、storage
SEO | 需单独方案，比较困难，不利于SEO检索 | 实现方式简单
维护成本 | 相对容易 | 相对复杂
使用范围 | 高需求的体验度，追求界面流畅 | 追求高度支持SEO，例如新闻网站、电商平台等
维护成本 | 相对低 | 相对复杂

## 2. SPA 加快首屏访问速度

在页面渲染的过程，导致加载速度慢的因素可能如下：

+ 网络延时问题
+ 资源文件体积是否过大
+ 资源是否重复发送请求去加载了
+ 加载脚本的时候，渲染内容堵塞了

### 减小入口文件体积

路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加

懒加载实现：ES6的动态加载模块 - import

```js
import(/* webpackChunkName: "con" */ './con.js')

module.exports = {
  entry:'./src/main.js', //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    filename: 'bundle.js',
  }
}
// 这里设定了chunkFilename的命名规则为：[name]+.+bundle.js。这里的[name]就是/* webpackChunkName: "con" */ 设定的值
```

webpack提供的require.ensure()
```js
{
  path: '/home',
  name: 'Home',
  component: r => require.ensure([],() =>  r(require('@/components/HelloWorld')), 'home')
}
```

ES 提出的import方法
```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/components/HelloWorld")
    }
  ]
})
// 不加 { } ，表示直接return
```

### 静态资源本地缓存

+ 采用HTTP缓存，设置Cache-Control，Last-Modified，Etag等响应头
+ 采用Service Worker离线缓存
+ 前端合理利用localStorage

### UI框架按需加载

例如element-UI、或者antd按需引用

```js
import { Button, Input, Pagination } from 'element-ui';
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
```

### 组件重复打包

+ 假设A.js文件是一个常用的库，现在有多个路由使用了A.js文件，这就造成了重复下载
+ 解决方案：在webpack的config文件中，修改CommonsChunkPlugin的配置
+ `minChunks` 为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件

### 图片资源的压缩

+ 图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素
+ 对于所有的图片资源，我们可以进行适当的压缩
+ 对页面上使用到的icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻http请求压力

### 开启GZip压缩

+ 拆完包之后，我们再用gzip做一下压缩 安装compression-webpack-plugin
+ cnmp i compression-webpack-plugin -D

在vue.congig.js中引入并修改webpack配置
```js
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
  if (process.env.NODE_ENV === 'production') {
  // 为生产环境修改配置...
    config.mode = 'production'
    return {
      plugins: [new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, //匹配文件名
        threshold: 10240, //对超过10k的数据进行压缩
        deleteOriginalAssets: false //是否删除原文件
      })]
    }
  }
  ...
}
```

在服务器我们也要做相应的配置 如果发送请求的浏览器支持gzip，就发送给它gzip格式的文件 我的服务器是用express框架搭建的 只要安装一下compression就能使用

```js
const compression = require('compression')
app.use(compression())  // 在其他中间件使用之前调用
```

### 使用SSR

SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器

从头搭建一个服务端渲染是很复杂的，vue应用建议使用Nuxt.js实现服务端渲染

## 3. SSR

SSR 服务端渲染 PHP 首页静态生成 加快请求速度 SEO 首屏耗时短 安全性 需要服务器渲染 访问量大 成本大 页面切换需要重新渲染 体验不好

+ SEO友好，因为返回给前端的是渲染好的HTML结构，里面的内容都可以被爬虫抓取到。
+ 对于一些应用性能等要求不高的项目，比如某个公司的静态网页，内容很少的情况下，直接一把梭就好，不用再搭建工程化的环境等
+ 对于后端程序员（全栈工程师）来说，不用去特意学习前端框架，公司也不用特意去招聘前端
+ 兼容性好，传统服务端渲染多页面应用吐出来的都是字符串，HTML结构
+ 如果项目很大，不利于维护
+ 性能和用户体验，不能跟单页面应用相比
+ 后期迭代，升级空间不大，目前大部分写得比较好的库，都建立vue，react等框架基础上，他们都有一套自己的运行机制，有自己的生命周期，并且不像传统的应用，还加上了一层虚拟DOM以及diff算法
+ 现在类似Ant-Design-pro这样的开箱即用的库已经很多，单页面应用的学习和开发成本已经很低很低，如果还在使用传统的技术去开发新的应用，对于开发人员多内心来说也是一种折磨


## 4. v-if v-show

### v-if 和 v-show 区别

其作用相同，控制元素在页面是否显示

内容 | v-if | v-show
--- | --- | ---
控制手段 | dom元素整个添加或删除 | css--display:none，dom元素依旧还在
性能上 | 性能更低 | 性能高
编译过程 | 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件| 基于css切换
编译条件 | 条件渲染，确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染 | 初始化页面就加载渲染
适用场景 | 运行时很少改变条件，不需要频繁切换条件的场景 | 需要频繁切换的场景

### v-show原理

不管初始条件是什么，元素总是会被渲染

```js
// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts
export const vShow: ObjectDirective<VShowElement> = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === 'none' ? '' : el.style.display
    if (transition && value) {
      transition.beforeEnter(el)
    } else {
      setDisplay(el, value)
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el)
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    // ...
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value)
  }
}
```

### v-if原理

v-if在实现上比v-show要复杂的多，因为还有else else-if 等条件需要处理，其中最主要的是返回一个node节点，render函数通过表达式的值来决定是否生成DOM

```js
// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts
export const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      // ...
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          ) as IfConditionalExpression
        } else {
          // attach this branch's codegen node to the v-if root.
          const parentCondition = getParentCondition(ifNode.codegenNode!)
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          )
        }
      }
    })
  }
)
```

## 5. v-for 与 v-if

### v-for和v-if为什么不能连用

+ v-for比v-if优先级高，所以先执行v-for，再执行v-if
+ 如果数据项很少，影响不大，如果数据项很多，会先执行v-for，再执行v-if，这样会浪费性能

### v-for和v-if的替代方案

+  在计算属性中过滤数据
+ 使用`<template>`标签包裹v-if，这样v-if会先执行，然后再执行v-for

```js
<template v-if="isShow">
  <p v-for="item in items">
</template>
```

## 6. 生命周期

+ beforeCreate 组件实例被创建之初 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
+ created 组件实例已经完全创建 组件初始化完毕，各种数据可以使用，常用于异步数据获取
+ beforeMount 组件挂载之前 未执行渲染、更新，dom未创建
+ mounted 组件挂载到实例上去之后 初始化结束，dom已创建，可用于获取访问数据和dom元素
+ beforeUpdate 组件数据发生变化，更新之前 更新前，可用于获取更新前各种状态
+ updated 组件数据更新之后 更新后，所有状态已是最新
+ beforeDestroy 组件实例销毁之前 销毁前，可用于一些定时器或订阅的取消
+ destroyed 组件实例销毁之后 组件已销毁，作用同上
+ activated keep-alive 缓存的组件激活时
+ deactivated keep-alive 缓存的组件停用时调用
+ errorCaptured 捕获一个来自子孙组件的错误时被调用

数据请求在created和mouted的区别

+ created是在组件实例一旦创建完成的时候立刻调用，这时候页面dom节点并未生成；
+ mounted是在页面dom节点渲染完毕之后就立刻执行的。触发时机上created是比mounted要更早的
+ 两者的相同点：都能拿到实例对象的属性和方法。 
+ 讨论这个问题本质就是触发的时机，放在mounted中的请求有可能导致页面闪动（因为此时页面dom结构已经生成），但如果在页面加载前完成请求，则不会出现此情况
+ 建议对页面内容的改动放在created生命周期当中。

## 7. data属性是一个函数而不是一个对象

+ 根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
+ 组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象

## 8. NextTick

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

我们可以理解成，Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

### 实现原理

+ 源码位置：/src/core/util/next-tick.js
+ callbacks也就是异步操作队列
+ callbacks新增回调函数后又执行了timerFunc函数，pending是用来标识同一个时间只能执行一次

```js
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
export let isUsingMicroTask = false
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  //判断1：是否原生支持Promise
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  //判断2：是否原生支持MutationObserver
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  //判断3：是否原生支持setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  //判断4：上面都不行，直接用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

+ 把回调函数放入callbacks等待执行
+ 将执行函数放到微任务或者宏任务中
+ 事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调

## 9. keep-alive


生命周期