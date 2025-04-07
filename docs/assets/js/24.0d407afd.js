(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{340:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm发布模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm发布模块"}},[s._v("#")]),s._v(" NPM发布模块")]),s._v(" "),a("p",[s._v("在我们进行多个项目开发的时候，有时候发现有的Vue模块在这些项目中是共用的，这个时候我们就可以把这个模块封装发到NPM上，然后再项目中安装引入就可以使用了。")]),s._v(" "),a("p",[s._v("下面我就来简单介绍一下发布NPM包的流程")]),s._v(" "),a("h2",{attrs:{id:"一、项目创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、项目创建"}},[s._v("#")]),s._v(" 一、项目创建")]),s._v(" "),a("h3",{attrs:{id:"_1-使用简洁的webpack配置模板webpack-simple初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用简洁的webpack配置模板webpack-simple初始化项目"}},[s._v("#")]),s._v(" 1. 使用简洁的webpack配置模板webpack-simple初始化项目")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vue init webpack-simple vue-name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#简洁的webpack配置模板")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-编写组件代码-本地进行调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写组件代码-本地进行调试"}},[s._v("#")]),s._v(" 2. 编写组件代码，本地进行调试")]),s._v(" "),a("p",[s._v("先编写组件代码，例如：")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ msg }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("然后在App.vue中直接引入本地的组件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<HelloWorld msg="这是一个测试内容"/></HelloWorld>\n\nimport HelloWorld from "./components/HelloWorld";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"二、本地组件测试没问题-改造成vue插件类型的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、本地组件测试没问题-改造成vue插件类型的"}},[s._v("#")]),s._v(" 二、本地组件测试没问题,改造成vue插件类型的")]),s._v(" "),a("h3",{attrs:{id:"_1-创建一个index-js文件-将组件输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个index-js文件-将组件输出"}},[s._v("#")]),s._v(" 1. 创建一个index.js文件，将组件输出")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" vueHelloWorld "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/HelloWorld'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HelloWorld"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vueHelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vueHelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vuePayKeyboard.name 组件的name属性")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 虽然没有明确规定用$开头  但是大家都默认遵守这个规定")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" HelloWorld"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_2-修改配置文件package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置文件package-json"}},[s._v("#")]),s._v(" 2. 修改配置文件package.json")]),s._v(" "),a("h4",{attrs:{id:"_1-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-name"}},[s._v("#")]),s._v(" 1) name")]),s._v(" "),a("ul",[a("li",[s._v("名称，发布的模块名称，发布线上后，可以通过npm install xxxx来引用该模块，一般Vue组件以"),a("code",[s._v("vue-")]),s._v("开头")])]),s._v(" "),a("h4",{attrs:{id:"_2-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-description"}},[s._v("#")]),s._v(" 2) description")]),s._v(" "),a("ul",[a("li",[s._v("描述，该模块的简单描述")])]),s._v(" "),a("h4",{attrs:{id:"_3-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-version"}},[s._v("#")]),s._v(" 3) version")]),s._v(" "),a("ul",[a("li",[s._v("版本号，版本号分为A.B.C三位")]),s._v(" "),a("li",[s._v("A表示主版本号，如果有较大变动，且向下不兼容，需要更新，A为零时表示软件还在开发阶段")]),s._v(" "),a("li",[s._v("B表示次版本号，如果是新增了功能，而且向下兼容，需要更新")]),s._v(" "),a("li",[s._v("C表示补丁版本号，如修复bug")])]),s._v(" "),a("h4",{attrs:{id:"_4-author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-author"}},[s._v("#")]),s._v(" 4)author")]),s._v(" "),a("ul",[a("li",[s._v("作者信息")])]),s._v(" "),a("h4",{attrs:{id:"_5-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-license"}},[s._v("#")]),s._v(" 5）license")]),s._v(" "),a("ul",[a("li",[s._v("代码授权许可，"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Category:%E8%87%AA%E7%94%B1%E8%BB%9F%E9%AB%94%E6%8E%88%E6%AC%8A",target:"_blank",rel:"noopener noreferrer"}},[s._v("具体编写可参考这里"),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"_6-main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-main"}},[s._v("#")]),s._v(" 6）main")]),s._v(" "),a("ul",[a("li",[s._v('主入口文件，该属性指定了程序的主入口文件。即如果你的模块被命名为foo，用户安装了这个模块并通过require("foo")来使用这个模块，那么require返回的内容就是main属性指定的文件中 module.exports指向的对象。')])]),s._v(" "),a("h4",{attrs:{id:"_7-keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-keywords"}},[s._v("#")]),s._v(" 7）keywords")]),s._v(" "),a("ul",[a("li",[s._v("关键词，可以通过npm搜索你填写的关键词找到你的模块")])]),s._v(" "),a("h4",{attrs:{id:"_8-bugs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-bugs"}},[s._v("#")]),s._v(" 8）bugs")]),s._v(" "),a("ul",[a("li",[s._v("填写一个bug提交地址或者一个邮箱，被你的模块坑到的人可以通过这里吐槽")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"author>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"private"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bugs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"_3-修改-gitignore文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改-gitignore文件"}},[s._v("#")]),s._v(" 3. 修改.gitignore文件")]),s._v(" "),a("p",[s._v("因为要用dist文件夹，所以在.gitignore文件中把dist/去掉")]),s._v(" "),a("h3",{attrs:{id:"_4-修改配置文件webpack-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改配置文件webpack-config-js"}},[s._v("#")]),s._v(" 4. 修改配置文件webpack.config.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("publicPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/lib/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("libraryTarget")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("umdNamedDefine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_5-修改文件目录格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改文件目录格式"}},[s._v("#")]),s._v(" 5. 修改文件目录格式")]),s._v(" "),a("h4",{attrs:{id:"_1-删除不需要的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-删除不需要的文件"}},[s._v("#")]),s._v(" 1）删除不需要的文件")]),s._v(" "),a("p",[s._v("删除main.js、index.html、App.vue等不需要的文件")]),s._v(" "),a("h4",{attrs:{id:"_2-更改目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-更改目录"}},[s._v("#")]),s._v(" 2）更改目录")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("HelloWorld\n├── example                    # 存放demo的代码\n├── lib                        # 真实引用编译过的代码\n├── src                        # 存放源码的目录\n├── style                      # 样式文件\n├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bebalrc                   # babel配置文件\n├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js                   # 项目入口文件\n├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json            \n├── webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json        # 项目开发demo的时候 需要用到的webpack\n└── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md                  # 项目说明 安装 使用\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_6-打包线下验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-打包线下验证"}},[s._v("#")]),s._v(" 6. 打包线下验证")]),s._v(" "),a("h4",{attrs:{id:"_1-打包压缩组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-打包压缩组件"}},[s._v("#")]),s._v(" 1）打包压缩组件")]),s._v(" "),a("div",{staticClass:"language-linux line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run build\nnpm pack\n#打包完成可以看到项目目录下多了一个压缩文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_2-新项目引入测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新项目引入测试"}},[s._v("#")]),s._v(" 2）新项目引入测试")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装打包文件 name：打包文件名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 路径/HelloWorld-1.0.0.tgz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引入组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" HelloWorld from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),s._v("\nVue.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"三、发布线上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、发布线上"}},[s._v("#")]),s._v(" 三、发布线上")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login // 登陆 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish // 发布\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果使用淘宝镜像 登陆会报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# code E409")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm ERR! 409 Conflict - PUT https://registry.npm.taobao.org/-/user/org.couchdb.user:XXX - conflict")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用如下命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://registry.npmjs.org\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://registry.npmjs.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后登陆自己的npm网站就可看到了")])])}),[],!1,null,null,null);a.default=e.exports}}]);