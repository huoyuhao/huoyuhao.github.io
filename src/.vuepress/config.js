// 配置文件
module.exports = {
  description: '霍雨浩的个人博客，每天进步一点点，加油！！！',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon
    ['meta', { name: 'author', content: 'liam' }],
    ['meta', { name: 'keywords', content: '前端 web 霍雨浩 个人博客' }],
    ["meta", { name: "apple-mobile-web-app-capable", content: 'yes' }]
  ],
  dest: './docs', // 设置输出目录
  base: '/', // 设置站点根路径
  repo: 'https://github.com/huoyuhao/huoyuhao.github.io', // 添加 github 链接
  themeConfig: { // 导航栏配置
    logo: '/header-logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Web', link: '/web/' },
      { text: '网络', link: '/network/' },
      { text: '框架', link: '/frame/' },
      { text: '工具', link: '/other/' },
      { text: 'GitHub', link: 'https://github.com/huoyuhao/huoyuhao.github.io' },
    ],
    sidebar: 




    {"/web/":[{"title":"代码规范","sidebarDepth":2,"children":[{"title":"CSS代码规范","path":"/web/0-代码规范/0-CSS代码规范.md"},{"title":"HTML代码规范","path":"/web/0-代码规范/1-HTML代码规范.md"},{"title":"Js代码规范","path":"/web/0-代码规范/2-Js代码规范.md"}]},{"title":"HTML","sidebarDepth":2,"children":[{"title":"HTML-CSS基础总结","path":"/web/1-HTML/01-HTML-CSS基础总结.md"},{"title":"CSS画图总结","path":"/web/1-HTML/02-CSS画图总结.md"},{"title":"CSS之Flex布局","path":"/web/1-HTML/03-CSS之Flex布局.md"},{"title":"CSS之Grid布局","path":"/web/1-HTML/04-CSS之Grid布局.md"}]},{"title":"Js基础","sidebarDepth":2,"children":[{"title":"Js基础总结","path":"/web/2-Js基础/00-Js基础总结.md"},{"title":"Js基础数据类型","path":"/web/2-Js基础/01-Js基础数据类型.md"},{"title":"Js数组","path":"/web/2-Js基础/01-Js数组.md"},{"title":"Js正则表达式","path":"/web/2-Js基础/01-Js正则表达式.md"},{"title":"Js执行机制","path":"/web/2-Js基础/02-Js执行机制.md"},{"title":"Js中This","path":"/web/2-Js基础/03-Js中This.md"},{"title":"Js中的call方法","path":"/web/2-Js基础/03-Js中的call方法.md"},{"title":"Js中的new操作符","path":"/web/2-Js基础/03-Js中的new操作符.md"},{"title":"Js原型链","path":"/web/2-Js基础/04-Js原型链.md"},{"title":"Js防抖节流","path":"/web/2-Js基础/05-Js防抖节流.md"},{"title":"Js深拷贝","path":"/web/2-Js基础/06-Js深拷贝.md"}]},{"title":"Js进阶","sidebarDepth":2,"children":[{"title":"Js事件循环机制","path":"/web/3-Js进阶/00-Js事件循环机制.md"},{"title":"Js请求AJAX","path":"/web/3-Js进阶/01-Js请求AJAX.md"},{"title":"Js的Set Map","path":"/web/3-Js进阶/02-Js的Set Map.md"},{"title":"Js中的promise","path":"/web/3-Js进阶/03-Js中的promise.md"}]},{"title":"Js安全","sidebarDepth":2,"children":[{"title":"XSS","path":"/web/4-Js安全/01-XSS.md"},{"title":"CSRF","path":"/web/4-Js安全/02-CSRF.md"}]},{"title":"DOM","sidebarDepth":2,"children":[{"title":"DOM事件冒泡-捕获-委托","path":"/web/5-DOM/01-DOM事件冒泡-捕获-委托.md"},{"title":"DOM操作方法","path":"/web/5-DOM/02-DOM操作方法.md"}]},{"title":"Mac","sidebarDepth":2,"children":[{"title":"快捷键","path":"/web/6-Mac/01-快捷键.md"}]},{"title":"Node","sidebarDepth":2,"children":[{"title":"exports","path":"/web/6-Node/01-exports.md"},{"title":"Node命令","path":"/web/6-Node/02-Node命令.md"}]},{"title":"linux","sidebarDepth":2,"children":[{"title":"Linux常用命令","path":"/web/6-linux/00-Linux常用命令.md"},{"title":"博客","path":"/web/6-linux/00-博客.md"},{"title":"升级服务器","path":"/web/6-linux/01-升级服务器.md"},{"title":"Node命令","path":"/web/6-linux/02-Node命令.md"},{"title":"Nginx配置","path":"/web/6-linux/03-Nginx配置.md"}]}],"/network/":[{"title":"browser","sidebarDepth":2,"children":[{"title":"性能优化","path":"/network/0-browser/00-性能优化.md"},{"title":"浏览器内核","path":"/network/0-browser/01-浏览器内核.md"},{"title":"浏览器DNS解析","path":"/network/0-browser/02-浏览器DNS解析.md"},{"title":"DNS预解析","path":"/network/0-browser/03-DNS预解析.md"},{"title":"跨域","path":"/network/0-browser/03-跨域.md"},{"title":"Cookie","path":"/network/0-browser/04-Cookie.md"},{"title":"浏览器存储","path":"/network/0-browser/04-浏览器存储.md"},{"title":"浏览器缓存","path":"/network/0-browser/05-浏览器缓存.md"},{"title":"浏览器渲染","path":"/network/0-browser/06-浏览器渲染.md"}]},{"title":"network","sidebarDepth":2,"children":[{"title":"TCP与UDP协议","path":"/network/1-network/01-TCP与UDP协议.md"},{"title":"TCP三次握手和四次挥手","path":"/network/1-network/02-TCP三次握手和四次挥手.md"},{"title":"常见HTTP状态码","path":"/network/1-network/03-常见HTTP状态码.md"},{"title":"HTTP发展历程","path":"/network/1-network/04-HTTP发展历程.md"},{"title":"HTTPS","path":"/network/1-network/05-HTTPS.md"},{"title":"GET与POST","path":"/network/1-network/06-GET与POST.md"}]}],"/frame/":[{"title":"vue","sidebarDepth":2,"children":[{"title":"Vue基础总结","path":"/frame/0-vue/01-Vue基础总结.md"},{"title":"NPM发布模块到NPM上","path":"/frame/0-vue/09-NPM发布模块到NPM上.md"}]},{"title":"webpack","sidebarDepth":2,"children":[]},{"title":"typescript","sidebarDepth":2,"children":[]}],"/other/":[{"title":"vscode插件","path":"/other/01-vscode插件.md"},{"title":"vscode远程连接","path":"/other/01-vscode远程连接.md"},{"title":"git","path":"/other/02-git.md"},{"title":"fiddler","path":"/other/03-fiddler.md"},{"title":"docker","path":"/other/04-docker.md"},{"title":"eslint","path":"/other/05-eslint.md"},{"title":"npm使用","path":"/other/06-npm使用.md"}]}



,
    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
  markdown: { // md文档配置
    lineNumbers: true, // 代码块显示行号
  },
  plugins: {
    // "vuepress-plugin-auto-sidebar": {},
    '@vuepress/active-header-links': {},
    '@vuepress/back-to-top': {}, // 返回顶部
    '@vuepress/google-analytics': {
      'ga': 'UA-165864510-1'
    },
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
        margin: 16
      }
    }
  }
}