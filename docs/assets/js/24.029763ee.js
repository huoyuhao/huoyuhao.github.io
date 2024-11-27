(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{299:function(t,v,_){"use strict";_.r(v);var a=_(10),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"前端https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端https"}},[t._v("#")]),t._v(" 前端HTTPS")]),t._v(" "),v("p",[v("code",[t._v("超文本传输安全协议 (HTTPS, Hypertext Transfer Protocol Secure)")]),t._v(" 常称为HTTP over TLS，HTTP over SSL或HTTP Secure, 是一种使用计算器网络进行安全通信的传输协议。HTTPS经由HTTP进行通信，但利用SSL/TLS来加密数据包。HTTPS开发的主要目的，是提供对网站服务器的身份认证，保护交换数据的隐私与完整性。这个协议由网景公司（Netscape）在1994年首次提出，随后扩展到互联网上。")]),t._v(" "),v("p",[v("code",[t._v("传输层安全性协议 (TLS, Transport Layer Security)")]),t._v("，及其前身 安全套接层(SSL,Secure Sockets Layer)是一种安全协议，目的是为互联网通信，提供安全及数据完整性保障。网景公司推出HTTPS协议时，以SSL进行加密，这是SSL的起源。IETF将SSL进行标准化，1999年公布第一版TLS标准文件。随后又公布RFC 5246 （2008年8月）与 RFC 6176 （2011年3月）。TLS/SSL 不仅为浏览器提供支持，在邮箱、即时通信、VoIP、网络传真等应用程序中也得到广泛应用。")]),t._v(" "),v("p",[t._v("由于SSL/TSL在TCP与HTTP协议之间，所以需要先进性TCP连接")]),t._v(" "),v("h2",{attrs:{id:"ssl协议的握手过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssl协议的握手过程"}},[t._v("#")]),t._v(" SSL协议的握手过程")]),t._v(" "),v("h3",{attrs:{id:"客户端发送客户端问候clienthello"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端发送客户端问候clienthello"}},[t._v("#")]),t._v(" 客户端发送客户端问候ClientHello")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("支持的协议版本，比如TLS 1.0版")])]),t._v(" "),v("li",[v("p",[t._v('一个客户端生成的随机数 n1（Client random），稍后用于生成"对话密钥"')])]),t._v(" "),v("li",[v("p",[t._v("客户端会给服务器发送自己已经知道的密码套件列表，这是由客户按优先级排列的，但完全由服务器来决定发送与否")])])]),t._v(" "),v("h3",{attrs:{id:"服务端返回发送服务器问候信息serverhello"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端返回发送服务器问候信息serverhello"}},[t._v("#")]),t._v(" 服务端返回发送服务器问候信息ServerHello")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("确认使用的加密通信协议版本，比如TLS 1.0版本。如果浏览器与服务器支持的版本不一致，服务器关闭加密通信")])]),t._v(" "),v("li",[v("p",[t._v('一个服务器生成的随机数 n2（Server random），稍后用于生成"对话密钥"')])]),t._v(" "),v("li",[v("p",[t._v("确认使用的加密方法，服务器会从客户端发送的加密套件列表中选出一个加密套件")])]),t._v(" "),v("li",[v("p",[t._v("包含公钥的数字证书")])])]),t._v(" "),v("h4",{attrs:{id:"至此客户端和服务端都拥有了两个随机数-n1-n2-这两个随机数会在后续生成对称秘钥时用到"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#至此客户端和服务端都拥有了两个随机数-n1-n2-这两个随机数会在后续生成对称秘钥时用到"}},[t._v("#")]),t._v(" 至此客户端和服务端都拥有了两个随机数（n1 + n2），这两个随机数会在后续生成对称秘钥时用到")]),t._v(" "),v("h3",{attrs:{id:"验证数字证书的有效性后-客户端回应-其中内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#验证数字证书的有效性后-客户端回应-其中内容"}},[t._v("#")]),t._v(" 验证数字证书的有效性后，客户端回应，其中内容")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("一个随机数 n3。该随机数用数字证书公钥加密，防止被窃听")])]),t._v(" "),v("li",[v("p",[t._v("编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送")])]),t._v(" "),v("li",[v("p",[t._v("客户端握手结束通知，表示客户端的握手阶段已经结束。这一项同时也是前面发送的所有内容的hash值，用来供服务器校验")])]),t._v(" "),v("li",[v("p",[t._v("此外，如果第二步中，服务器要求客户端证书，客户端会在这一步发送证书及相关信息")])])]),t._v(" "),v("h3",{attrs:{id:"服务器最后回应-其中内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器最后回应-其中内容"}},[t._v("#")]),t._v(" 服务器最后回应，其中内容")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送")])]),t._v(" "),v("li",[v("p",[t._v("服务器握手结束通知，表示服务器的握手阶段已经结束")])])]),t._v(" "),v("p",[t._v("此时客户端和服务端都有随机数n1，n2，n3三个随机数，客户端和服务端用商定的算法利用3个随机数生成一个对话秘钥（session key），随后的通信就用这个秘钥进行加密解密，保证通信过程不被别人监听或者窜改")]),t._v(" "),v("h2",{attrs:{id:"握手阶段有三点需要注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#握手阶段有三点需要注意"}},[t._v("#")]),t._v(" 握手阶段有三点需要注意")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("生成对话密钥一共需要三个随机数")])]),t._v(" "),v("li",[v("p",[t._v('握手之后的对话使用"对话密钥"加密（对称加密），服务器的公钥和私钥只用于加密和解密"对话密钥"（非对称加密），无其他作用')])]),t._v(" "),v("li",[v("p",[t._v("服务器公钥放在服务器的数字证书之中")])])]),t._v(" "),v("h2",{attrs:{id:"https如何防范中间人攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https如何防范中间人攻击"}},[t._v("#")]),t._v(" HTTPS如何防范中间人攻击")]),t._v(" "),v("p",[t._v("中间人攻击（Man-in-the-middle attack，缩写："),v("code",[t._v("MITM")]),t._v("）是指攻击者与通讯的两端分别建立独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方直接对话，但事实上整个会话都被攻击者完全控制。")]),t._v(" "),v("h3",{attrs:{id:"如何防止冒充服务端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何防止冒充服务端"}},[t._v("#")]),t._v(" 如何防止冒充服务端")]),t._v(" "),v("p",[t._v("服务端有权威机构签名的数字证书，证书中带有公钥")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("窜改公钥会破坏数字证书，客户端验证证书有效性便可确认")])]),t._v(" "),v("li",[v("p",[t._v("就算窃取到证书后伪装成服务端与用户通信，没有私钥就无法解密出随机数n3，也就无法利用n1，n2，n3生成对话秘钥，没有对话秘钥也就无法解密用户发送的数据包。")])])]),t._v(" "),v("h3",{attrs:{id:"如何确认数字证书是可信的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何确认数字证书是可信的"}},[t._v("#")]),t._v(" 如何确认数字证书是可信的")]),t._v(" "),v("p",[t._v("CA机构是可信的，CA本身也包含一个非对称密钥对，私钥用于“签发”的数字证书，公钥发布出去用于验证数字证书。CA使用非对称密钥配合HASH算法保证数字证书可信且不可篡改。CA将使用者信息、站点公钥、有效期等关键信息打包做HASH运算，再将HASH运算结果用CA私钥签名生成指纹。然后将以上全部信息打包成数字证书。黑客没有私钥不可以伪造证书签名，且证书的内容如果被修改，HASH结果就会改变。因此黑客不可伪造或者篡改证书，有效的数字证书是可信的")]),t._v(" "),v("h4",{attrs:{id:"浏览器怎么知道ca是可信的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器怎么知道ca是可信的"}},[t._v("#")]),t._v(" 浏览器怎么知道CA是可信的")]),t._v(" "),v("p",[t._v("浏览器主要依据客户端操作系统保存的根证书列表判断CA的权威性。如下图，在Windows操作系统中，这个列表放在“受信任的根证书颁发机构存储区”中，这个列表实际上是CA机构的根证书集合，根证书包含CA机构的信息和公钥。只要是这个列表中的CA签发的证书，浏览器就认为可信。微软会动态维护根证书列表，用户需要管理员权限才能向这个列表中加入CA证书")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/HTTPS%E7%AB%99%E7%82%B9%E8%AE%A4%E8%AF%81%E8%BF%87%E7%A8%8B.jpg",alt:"HTTPS站点认证过程"}})]),t._v(" "),v("h2",{attrs:{id:"http和https区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http和https区别"}},[t._v("#")]),t._v(" HTTP和HTTPS区别")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("HTTP 是明文传输，HTTPS 通过 SSL\\TLS 进行了加密")])]),t._v(" "),v("li",[v("p",[t._v("HTTP 的端口号是 80，HTTPS 是 443")])]),t._v(" "),v("li",[v("p",[t._v("HTTPS 需要到 CA 申请证书，一般免费证书很少，需要交费")])]),t._v(" "),v("li",[v("p",[t._v("HTTP 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全")])])]),t._v(" "),v("h2",{attrs:{id:"https缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https缺点"}},[t._v("#")]),t._v(" HTTPS缺点")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("HTTPS协议握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电")])]),t._v(" "),v("li",[v("p",[t._v("https连接缓存不如http高效，如果是大流量网站，则会造成流量成本太高")])]),t._v(" "),v("li",[v("p",[t._v("https连接服务器端资源占用高很多，支持访客稍多的网站需要投入更大的成本，如果全部采用https，基于大部分计算资源闲置的假设的VPS的平均成本会上去")])]),t._v(" "),v("li",[v("p",[t._v("SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用")])]),t._v(" "),v("li",[v("p",[t._v("SSL证书通常需要绑定IP，不能再同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗(SSL有扩展可以部分解决这个问题，但是比较麻烦，而且要求浏览器、操作系统支持，Windows XP就不支持这个扩展，考虑到XP的装机量，这个特性几乎没用)")])])]),t._v(" "),v("h2",{attrs:{id:"tls-对网络请求速度的影响"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tls-对网络请求速度的影响"}},[t._v("#")]),t._v(" TLS 对网络请求速度的影响")]),t._v(" "),v("p",[t._v("由于部署了 HTTPS，传输层增加了 TLS，对一个完成的请求耗时又会多增加一些。具体会增加几个 RTT 呢")]),t._v(" "),v("p",[t._v("先来看看一个请求从零开始，完整的需要多少个 RTT。假设访问一个 HTTPS 网站，用户从 HTTP 开始访问，到收到第一个 HTTPS 的 Response，大概需要经历一下几个步骤(以目前最主流的 TLS 1.2 为例)：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("id")]),t._v(" "),v("th",[t._v("流程")]),t._v(" "),v("th",[t._v("消耗时间")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("DNS 解析网站域名")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("访问 HTTP 网页 TCP 握手")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("HTTPS 重定向 302")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("访问 HTTPS 网页 TCP 握手")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("TLS 握手第一阶段 Say Hello")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("【证书校验】CA 站点的 DNS 解析")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("【证书校验】CA 站点的 TCP 握手")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("【证书校验】请求 OCSP 验证")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("TLS 握手第二阶段 加密")]),t._v(" "),v("td",[t._v("1-RTT")])]),t._v(" "),v("tr",[v("td",[t._v("10")]),t._v(" "),v("td",[t._v("第一个 HTTPS 请求")]),t._v(" "),v("td",[t._v("1-RTT")])])])]),t._v(" "),v("p",[t._v("在上面这些步骤中，1、10 肯定无法省去，6、7、8 如果浏览器本地有缓存，是可选的。将剩下的画在流程图上，见下图")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/HTTPS%E6%8F%A1%E6%89%8B%E8%BF%87%E7%A8%8B.png",alt:"HTTPS握手过程"}})]),t._v(" "),v("h2",{attrs:{id:"https面临问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https面临问题"}},[t._v("#")]),t._v(" HTTPS面临问题")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("HTTPS 多次握手，会一定程度上降低用户访问速度")])]),t._v(" "),v("li",[v("p",[t._v("网站改用 HTTPS 以后，由 HTTP 跳转到 HTTPS 的方式增加了用户访问耗时（多数网站采用 301、302 跳转）")])]),t._v(" "),v("li",[v("p",[t._v("HTTPS 涉及到的安全算法会消耗 CPU 资源，需要增加大量机器（HTTPS 访问过程需要加解密）")])]),t._v(" "),v("li",[v("p",[t._v("SSL 证书费用较很高，以及其在服务器上的部署、更新维护非常繁琐")])])]),t._v(" "),v("h2",{attrs:{id:"https能防御csrf吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https能防御csrf吗"}},[t._v("#")]),t._v(" https能防御csrf吗")]),t._v(" "),v("p",[t._v("不能\nhttps是保证你和服务器之间传输的所有内容都是加密的，而且几乎不会被破解。")]),t._v(" "),v("p",[t._v("csrf是夸站请求伪造，比如你访问了存在css漏洞的网站，并且登录了，那么你的cookie会被css的攻击代码发送到攻击者的网站，攻击者获得了你的cookie之后，就可以用你的身份向你正在访问的网站发送请求了，这些请求就是伪造的。因为不是你发送的请求，是攻击者借用你的身份发送的。")]),t._v(" "),v("p",[t._v("https只管加密，无法防止你的cookie被盗。")]),t._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.wandoer.com/note/https-ssl-tls-%E5%8D%8F%E8%AE%AE-tls-%E6%8F%A1%E6%89%8B%E5%8D%8F%E8%AE%AE.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅析 HTTPS (SSL/TLS) 握手协议"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://halfrost.com/https_tls1-2_handshake/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS 温故知新（三） —— 直观感受 TLS 握手流程(上)"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"稍后了解更多内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#稍后了解更多内容"}},[t._v("#")]),t._v(" 稍后了解更多内容")]),t._v(" "),v("ul",[v("li",[t._v("SSL密钥交换")]),t._v(" "),v("li",[t._v("SSL重新握手")]),t._v(" "),v("li",[t._v("证书验证、获取安装")]),t._v(" "),v("li",[t._v("证书校验原理")])])])}),[],!1,null,null,null);v.default=s.exports}}]);