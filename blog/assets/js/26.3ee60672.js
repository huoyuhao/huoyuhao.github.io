(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{304:function(t,_,v){"use strict";v.r(_);var a=v(10),r=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tcp三次握手与四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手与四次挥手"}},[t._v("#")]),t._v(" TCP三次握手与四次挥手")]),t._v(" "),_("h2",{attrs:{id:"tcp三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[t._v("#")]),t._v(" TCP三次握手")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("第一次握手：建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）；")])]),t._v(" "),_("li",[_("p",[t._v("第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；")])]),t._v(" "),_("li",[_("p",[t._v("第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。")])])]),t._v(" "),_("p",[t._v("完成三次握手，客户端与服务器开始传送数据。")]),t._v(" "),_("h2",{attrs:{id:"tcp四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[t._v("#")]),t._v(" TCP四次挥手")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("客户端A发送一个FIN，用来关闭客户A到服务器B的数据传送；")])]),t._v(" "),_("li",[_("p",[t._v("服务器B收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号；")])]),t._v(" "),_("li",[_("p",[t._v("服务器B关闭与客户端A的连接，发送一个FIN给客户端A；")])]),t._v(" "),_("li",[_("p",[t._v("客户端A发回ACK报文确认，并将确认序号设置为收到序号加1。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png",alt:"三次握手"}})]),t._v(" "),_("h2",{attrs:{id:"tcp报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文"}},[t._v("#")]),t._v(" TCP报文")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/tcp%E6%8A%A5%E6%96%87.png",alt:"TCP报文格式图"}})]),t._v(" "),_("ul",[_("li",[t._v("序号：Seq序号，占32位，用来标识从TCP源端向目的端发送的字节流，发起方发送数据时对此进行标记。")]),t._v(" "),_("li",[t._v("确认序号：Ack序号，占32位，只有ACK标志位为1时，确认序号字段才有效，Ack=Seq+1。")])]),t._v(" "),_("h3",{attrs:{id:"tcp的6种标志位的分别代表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp的6种标志位的分别代表"}},[t._v("#")]),t._v(" tcp的6种标志位的分别代表")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("标志位")]),t._v(" "),_("th",[t._v("全称")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("SYN")]),t._v(" "),_("td",[t._v("synchronous")]),t._v(" "),_("td",[t._v("发起一个新连接")])]),t._v(" "),_("tr",[_("td",[t._v("ACK")]),t._v(" "),_("td",[t._v("acknowledgement")]),t._v(" "),_("td",[t._v("确认序号有效")])]),t._v(" "),_("tr",[_("td",[t._v("PSH")]),t._v(" "),_("td",[t._v("push")]),t._v(" "),_("td",[t._v("接收方应该尽快将这个报文交给应用层")])]),t._v(" "),_("tr",[_("td",[t._v("FIN")]),t._v(" "),_("td",[t._v("finish")]),t._v(" "),_("td",[t._v("释放一个连接")])]),t._v(" "),_("tr",[_("td",[t._v("RST")]),t._v(" "),_("td",[t._v("reset")]),t._v(" "),_("td",[t._v("重置连接")])]),t._v(" "),_("tr",[_("td",[t._v("URG")]),t._v(" "),_("td",[t._v("urgent")]),t._v(" "),_("td",[t._v("紧急指针（urgent pointer）有效")])])])]),t._v(" "),_("h4",{attrs:{id:"不要将确认序号ack与标志位中的ack搞混了"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不要将确认序号ack与标志位中的ack搞混了"}},[t._v("#")]),t._v(" 不要将确认序号Ack与标志位中的ACK搞混了")]),t._v(" "),_("h3",{attrs:{id:"握手过程具体报文内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#握手过程具体报文内容"}},[t._v("#")]),t._v(" 握手过程具体报文内容")]),t._v(" "),_("ul",[_("li",[t._v("第一次握手：客户端发送一个TCP的SYN标志位置1的包指明客户打算连接的服务器的端口，以及初始序号X，保存在包头的序列号(Sequence Number)字段里")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/tcp%E6%8A%A5%E6%96%87-1.png",alt:"第一次握手TCP报文格式图"}})]),t._v(" "),_("ul",[_("li",[t._v("第二次握手：服务器发回确认包(ACK)应答。即SYN标志位和ACK标志位均为1同时，将确认序号(Acknowledgement Number)设置为客户的ISN加1以，即X+1")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/tcp%E6%8A%A5%E6%96%87-2.png",alt:"第二次握手TCP报文格式图"}})]),t._v(" "),_("ul",[_("li",[t._v("第三次握手：客户端再次发送确认包(ACK)SYN标志位为0，ACK标志位为1，并且把服务器发来ACK的序号字段+1，放在确定字段中发送给对方，并且在数据段放写ISN的+1")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/tcp%E6%8A%A5%E6%96%87-3.png",alt:"第三次握手TCP报文格式图"}})]),t._v(" "),_("p",[t._v("为了方便查看，图片中标志位的所占字节大小与实际不符")]),t._v(" "),_("blockquote",[_("p",[t._v("初始序列号（ISN）：当两台主机需要使用TCP传输协议传输数据时，会创建一个新的连接。这涉及希望启动连接的第一个主机，以生成所谓的初始序列号（ISN），它基本上是我们正在查看的序列字段中包含的第一个序列号。")])]),t._v(" "),_("h2",{attrs:{id:"tcp状态迁移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp状态迁移"}},[t._v("#")]),t._v(" TCP状态迁移")]),t._v(" "),_("h3",{attrs:{id:"客户端tcp状态迁移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端tcp状态迁移"}},[t._v("#")]),t._v(" 客户端TCP状态迁移")]),t._v(" "),_("p",[t._v("CLOSED->SYN_SENT->ESTABLISHED->FIN_WAIT_1->FIN_WAIT_2->TIME_WAIT->CLOSED")]),t._v(" "),_("h3",{attrs:{id:"服务器tcp状态迁移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器tcp状态迁移"}},[t._v("#")]),t._v(" 服务器TCP状态迁移")]),t._v(" "),_("p",[t._v("CLOSED->LISTEN->SYN收到->ESTABLISHED->CLOSE_WAIT->LAST_ACK->CLOSED")]),t._v(" "),_("h2",{attrs:{id:"各个状态的意义如下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各个状态的意义如下"}},[t._v("#")]),t._v(" 各个状态的意义如下")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("标志位")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("LISTEN")]),t._v(" "),_("td",[t._v("侦听来自远方TCP端口的连接请求")])]),t._v(" "),_("tr",[_("td",[t._v("SYN-SENT")]),t._v(" "),_("td",[t._v("在发送连接请求后等待匹配的连接请求；")])]),t._v(" "),_("tr",[_("td",[t._v("SYN-RECEIVED")]),t._v(" "),_("td",[t._v("在收到和发送一个连接请求后等待对连接请求的确认；")])]),t._v(" "),_("tr",[_("td",[t._v("ESTABLISHED")]),t._v(" "),_("td",[t._v("代表一个打开的连接，数据可以传送给用户；")])]),t._v(" "),_("tr",[_("td",[t._v("FIN-WAIT-1")]),t._v(" "),_("td",[t._v("等待远程TCP的连接中断请求，或先前的连接中断请求的确认；")])]),t._v(" "),_("tr",[_("td",[t._v("FIN-WAIT-2")]),t._v(" "),_("td",[t._v("从远程TCP等待连接中断请求；")])]),t._v(" "),_("tr",[_("td",[t._v("CLOSE-WAIT")]),t._v(" "),_("td",[t._v("等待从本地用户发来的连接中断请求；")])]),t._v(" "),_("tr",[_("td",[t._v("CLOSING")]),t._v(" "),_("td",[t._v("等待远程TCP对连接中断的确认；")])]),t._v(" "),_("tr",[_("td",[t._v("LAST-ACK")]),t._v(" "),_("td",[t._v("等待原来发向远程TCP的连接中断请求的确认；")])]),t._v(" "),_("tr",[_("td",[t._v("TIME-WAIT")]),t._v(" "),_("td",[t._v("等待足够的时间以确保远程TCP接收到连接中断请求的确认；")])]),t._v(" "),_("tr",[_("td",[t._v("CLOSED")]),t._v(" "),_("td",[t._v("没有任何连接状态；")])])])]),t._v(" "),_("h2",{attrs:{id:"为什么tcp链接不是两次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么tcp链接不是两次"}},[t._v("#")]),t._v(" 为什么TCP链接不是两次")]),t._v(" "),_("p",[t._v("为了双方都能明确自己和对方的收、发能力是正常的。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("第一次握手：客户端无法知道自己发送是否正常，但是服务端收到请求，知道客户端发送能力正常，自己服务端的接受能力正常；")])]),t._v(" "),_("li",[_("p",[t._v("第二次握手：服务的发送请求到客户端，客户端知道服务端接受到自己第一次握手的请求了，客户端知道自己的发送和接受能力正常，服务端的发送和接受能力正常；")])]),t._v(" "),_("li",[_("p",[t._v("第三次握手：服务端接收到客户端的确认消息，确认了服务端的发送，接受能力正常。")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("视角")]),t._v(" "),_("th",[t._v("客收")]),t._v(" "),_("th",[t._v("客发")]),t._v(" "),_("th",[t._v("服收")]),t._v(" "),_("th",[t._v("服发")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("客视角")]),t._v(" "),_("td",[t._v("二")]),t._v(" "),_("td",[t._v("一 + 二")]),t._v(" "),_("td",[t._v("一 + 二")]),t._v(" "),_("td",[t._v("二")])]),t._v(" "),_("tr",[_("td",[t._v("服视角")]),t._v(" "),_("td",[t._v("二 + 三")]),t._v(" "),_("td",[t._v("一")]),t._v(" "),_("td",[t._v("一")]),t._v(" "),_("td",[t._v("二 + 三")])])])]),t._v(" "),_("h2",{attrs:{id:"为什么tcp断开链接需要四次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么tcp断开链接需要四次"}},[t._v("#")]),t._v(" 为什么TCP断开链接需要四次")]),t._v(" "),_("p",[t._v('因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手')]),t._v(" "),_("h2",{attrs:{id:"确认号与序列号关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#确认号与序列号关系"}},[t._v("#")]),t._v(" 确认号与序列号关系")]),t._v(" "),_("p",[t._v("确认号：其数值等于发送方的发送序号 +1(即接收方期望接收的下一个序列号)")]),t._v(" "),_("h2",{attrs:{id:"tcp协议如何来保证传输的可靠性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议如何来保证传输的可靠性"}},[t._v("#")]),t._v(" TCP协议如何来保证传输的可靠性")]),t._v(" "),_("p",[t._v("TCP提供一种面向连接的、可靠的字节流服务。其中，面向连接意味着两个使用TCP的应用（通常是一个客户和一个服务器）在彼此交换数据之前必须先建立一个TCP连接。在一个TCP连接中，仅有两方进行彼此通信；而字节流服务意味着两个应用程序通过TCP链接交换8bit字节构成的字节流，TCP不在字节流中插入记录标识符。")]),t._v(" "),_("h2",{attrs:{id:"对于可靠性-tcp通过以下方式进行保证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对于可靠性-tcp通过以下方式进行保证"}},[t._v("#")]),t._v(" 对于可靠性，TCP通过以下方式进行保证")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("数据包校验：目的是检测数据在传输过程中的任何变化，若校验出包有错，则丢弃报文段并且不给出响应，这时TCP发送数据端超时后会重发数据；")])]),t._v(" "),_("li",[_("p",[t._v("对失序数据包重排序：既然TCP报文段作为IP数据报来传输，而IP数据报的到达可能会失序，因此TCP报文段的到达也可能会失序。TCP将对失序数据进行重新排序，然后才交给应用层；")])]),t._v(" "),_("li",[_("p",[t._v("丢弃重复数据：对于重复数据，能够丢弃重复数据；")])]),t._v(" "),_("li",[_("p",[t._v("应答机制：当TCP收到发自TCP连接另一端的数据，它将发送一个确认。这个确认不是立即发送，通常将推迟几分之一秒；")])]),t._v(" "),_("li",[_("p",[t._v("超时重发：当TCP发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段；")])]),t._v(" "),_("li",[_("p",[t._v("流量控制：TCP连接的每一方都有固定大小的缓冲空间。TCP的接收端只允许另一端发送接收端缓冲区所能接纳的数据，这可以防止较快主机致使较慢主机的缓冲区溢出，这就是流量控制。TCP使用的流量控制协议是可变大小的滑动窗口协议。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/tcp%E4%BC%A0%E8%BE%93%E8%BF%87%E7%A8%8B.png",alt:"tcp传输过程"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);