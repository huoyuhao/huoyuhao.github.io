(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{306:function(t,a,_){"use strict";_.r(a);var v=_(10),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端get与post的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端get与post的区别"}},[t._v("#")]),t._v(" 前端GET与POST的区别")]),t._v(" "),a("h2",{attrs:{id:"get与post的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get与post的区别"}},[t._v("#")]),t._v(" GET与POST的区别")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求")])]),t._v(" "),a("li",[a("p",[t._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置")])]),t._v(" "),a("li",[a("p",[t._v("GET请求参数只能支持ASCII，而POST支持任意binary，包括中文")])]),t._v(" "),a("li",[a("p",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留")])]),t._v(" "),a("li",[a("p",[t._v("GET请求在URL中传送的参数是有长度限制的，而POST么有")])]),t._v(" "),a("li",[a("p",[t._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息")])]),t._v(" "),a("li",[a("p",[t._v("GET参数通过URL传递，POST放在Request body中")])])]),t._v(" "),a("h2",{attrs:{id:"请求过程不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求过程不同"}},[t._v("#")]),t._v(" 请求过程不同")]),t._v(" "),a("h3",{attrs:{id:"post请求的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post请求的过程"}},[t._v("#")]),t._v(" post请求的过程")]),t._v(" "),a("ol",[a("li",[t._v("浏览器请求tcp连接（第一次握手）")]),t._v(" "),a("li",[t._v("服务器答应进行tcp连接（第二次握手）")]),t._v(" "),a("li",[t._v("浏览器确认，并发送post请求头（第三次握手，这个报文比较小，所以http会在此时进行第一次数据发送）")]),t._v(" "),a("li",[t._v("服务器返回100 Continue响应")]),t._v(" "),a("li",[t._v("浏览器发送数据")]),t._v(" "),a("li",[t._v("服务器返回200 OK响应")])]),t._v(" "),a("h3",{attrs:{id:"get请求的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get请求的过程"}},[t._v("#")]),t._v(" get请求的过程")]),t._v(" "),a("ol",[a("li",[t._v("浏览器请求tcp连接（第一次握手）")]),t._v(" "),a("li",[t._v("服务器答应进行tcp连接（第二次握手）")]),t._v(" "),a("li",[t._v("浏览器确认，并发送get请求头和数据（第三次握手，这个报文比较小，所以http会在此时进行第一次数据发送）")]),t._v(" "),a("li",[t._v("服务器返回200 OK响应")])]),t._v(" "),a("p",[t._v("以上观点是"),a("strong",[t._v("错误的")])]),t._v(" "),a("p",[t._v("客户端可以利用HTTP的Continued协议来这样做：客户端总是先发送所有请求头给服务器，让服务器校验。如果通过了，服务器回复“100 - Continue”，客户端再把剩下的数据发给服务器。如果请求被拒了，服务器就回复个400之类的错误，这个交互就终止了。这样，就可以避免浪费带宽传请求体。但是代价就是会多一次Round Trip。如果刚好请求体的数据也不多，那么一次性全部发给服务器可能反而更好。")]),t._v(" "),a("p",[t._v("基于此，客户端就能做一些优化，比如内部设定一次POST的数据超过1KB就先只发“请求头”，否则就一次性全发。客户端甚至还可以做一些Adaptive的策略，统计发送成功率，如果成功率很高，就总是全部发等等。不同浏览器，不同的客户端（curl，postman）可以有各自的不同的方案。不管怎样做，优化目的总是在提高数据吞吐和降低带宽浪费上做一个折衷。")]),t._v(" "),a("p",[t._v("因此到底是发一次还是发N次，客户端可以很灵活的决定。因为不管怎么发都是符合HTTP协议的，因此我们应该视为这种优化是一种实现细节，而不用扯到GET和POST本身的区别上。更不要当个什么世纪大发现。")]),t._v(" "),a("h2",{attrs:{id:"关于url的长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于url的长度"}},[t._v("#")]),t._v(" 关于URL的长度")]),t._v(" "),a("p",[t._v("不论是GET和POST都可以使用URL传递数据，所以我们常说的“GET数据有长度限制“其实是指”URL的长度限制“。")]),t._v(" "),a("h2",{attrs:{id:"安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[t._v("#")]),t._v(" 安全性")]),t._v(" "),a("p",[t._v("HTTP本身是明文协议。每个HTTP请求和返回的每个byte都会在网络上明文传播，不管是url，header还是body")]),t._v(" "),a("p",[t._v("必须做从客户端到服务器的端端加密。业界的通行做法就是https")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25028045",target:"_blank",rel:"noopener noreferrer"}},[t._v("听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/28586791/answer/767316172",target:"_blank",rel:"noopener noreferrer"}},[t._v("GET 和 POST 到底有什么区别？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);