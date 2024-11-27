(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{336:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom事件"}},[t._v("#")]),t._v(" DOM事件")]),t._v(" "),s("h2",{attrs:{id:"_1-dom事件冒泡-捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-dom事件冒泡-捕获"}},[t._v("#")]),t._v(" 1. DOM事件冒泡/捕获")]),t._v(" "),s("h3",{attrs:{id:"_1-1-dom事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-dom事件冒泡"}},[t._v("#")]),t._v(" 1.1 DOM事件冒泡")]),t._v(" "),s("p",[t._v("当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序")]),t._v(" "),s("h3",{attrs:{id:"_1-2-event-target-与-currenttarget区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-event-target-与-currenttarget区别"}},[t._v("#")]),t._v(" 1.2 event.target 与 currentTarget区别")]),t._v(" "),s("p",[t._v("父元素上的处理程序始终可以获取事件实际发生位置的详细信息。")]),t._v(" "),s("p",[t._v("引发事件的那个嵌套层级最深的元素被称为目标元素，可以通过 "),s("code",[t._v("event.target")]),t._v(" 访问。")]),t._v(" "),s("p",[t._v("注意与 "),s("code",[t._v("this（=event.currentTarget）")]),t._v("之间的区别：")]),t._v(" "),s("ul",[s("li",[t._v("event.target —— 是引发事件的“目标”元素，它在冒泡过程中不会发生变化。")]),t._v(" "),s("li",[t._v("this —— 是“当前”元素，其中有一个当前正在运行的处理程序。")])]),t._v(" "),s("p",[t._v("例如，如果我们有一个处理程序 "),s("code",[t._v("form.onclick")]),t._v("，那么它可以“捕获”表单内的所有点击。无论点击发生在哪里，它都会冒泡到 "),s("code",[t._v("form")]),t._v(" 并运行处理程序。")]),t._v(" "),s("p",[t._v("在 form.onclick 处理程序中：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("this（=event.currentTarget）")]),t._v("是 "),s("code",[t._v("form")]),t._v(" 元素，因为处理程序在它上面运行。")]),t._v(" "),s("li",[s("code",[t._v("event.target")]),t._v(" 是表单中实际被点击的元素")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-停止冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-停止冒泡"}},[t._v("#")]),t._v(" 1.3 停止冒泡")]),t._v(" "),s("p",[t._v("冒泡事件从目标元素开始向上冒泡，但是任意处理程序都可以决定事件已经被完全处理，并停止冒泡。")]),t._v(" "),s("p",[t._v("用于停止冒泡的方法是 "),s("code",[t._v("event.stopPropagation()")])]),t._v(" "),s("p",[s("code",[t._v("event.stopImmediatePropagation()")]),t._v(" 与 "),s("code",[t._v("event.stopPropagation()")]),t._v(" 区别")]),t._v(" "),s("ul",[s("li",[t._v("stopPropagation可以阻止事件传播，但不会影响该事件的其他监听方法执行")]),t._v(" "),s("li",[t._v("stopImmediatePropagation不仅阻止事件传播，还会阻止该事件后面的监听方法执行")])]),t._v(" "),s("h3",{attrs:{id:"_1-4-事件捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-事件捕获"}},[t._v("#")]),t._v(" 1.4 事件捕获")]),t._v(" "),s("p",[t._v("事件处理的另一个阶段被称为“捕获（capturing）”")]),t._v(" "),s("p",[t._v("DOM 事件标准描述了事件传播的 3 个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素。")]),t._v(" "),s("li",[t._v("目标阶段（Target phase）—— 事件到达目标元素。")]),t._v(" "),s("li",[t._v("冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡")])]),t._v(" "),s("p",[t._v("添加事件"),s("code",[t._v("element.addEventListener(event, function, useCapture)")])]),t._v(" "),s("ul",[s("li",[t._v("第一个参数是需要绑定的事件")]),t._v(" "),s("li",[t._v("第二个参数是触发事件后要执行的函数")]),t._v(" "),s("li",[t._v("第三个参数默认值是false，表示在事件冒泡阶段调用事件处理函数；如果参数为true，则表示在事件捕获阶段调用处理函数")])]),t._v(" "),s("p",[t._v("总结下来又如下特点：")]),t._v(" "),s("ul",[s("li",[t._v("对于非target节点则先执行捕获在执行冒泡")]),t._v(" "),s("li",[t._v("对于target节点则是先执行先注册的事件，无论冒泡还是捕获")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("s1\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\ns1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s1 冒泡事件"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s2 冒泡事件"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \ns1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s1 捕获事件"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \ns2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s2 捕获事件"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 输出结果："s1 捕获事件"、"s2 冒泡事件"、"s2 捕获事件"、"s1 冒泡事件"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为到达s2元素是目标阶段，先注册的冒泡后注册的捕获，则先执行冒泡")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("h2",{attrs:{id:"_2-dom事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-dom事件委托"}},[t._v("#")]),t._v(" 2. DOM事件委托")]),t._v(" "),s("p",[t._v("捕获和冒泡允许我们实现一种被称为 事件委托 的强大的事件处理模式。通俗地来讲，就是把一个元素响应事件（"),s("code",[t._v("click...")]),t._v("）的函数委托到另一个元素")]),t._v(" "),s("p",[t._v("事件委托的优点：")]),t._v(" "),s("ul",[s("li",[t._v("减少内存消耗 - 减少绑定事件")]),t._v(" "),s("li",[t._v("动态绑定事件 - 新增资源素自动绑定事件")])]),t._v(" "),s("p",[t._v("事件委托也是有一定局限性的；比如 "),s("code",[t._v("focus")]),t._v("、"),s("code",[t._v("blur")]),t._v(" 之类的事件本身没有事件冒泡机制，所以无法委托； "),s("code",[t._v("mousemove")]),t._v("、"),s("code",[t._v("mouseout")]),t._v(" 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的。")]),t._v(" "),s("h2",{attrs:{id:"_3-参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考文章"}},[t._v("#")]),t._v(" 3. 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zh.javascript.info/bubbling-and-capturing",target:"_blank",rel:"noopener noreferrer"}},[t._v("冒泡和捕获"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);