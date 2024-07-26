(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{306:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vscode远程连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode远程连接"}},[s._v("#")]),s._v(" vscode远程连接")]),s._v(" "),a("h2",{attrs:{id:"配置云服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置云服务器"}},[s._v("#")]),s._v(" 配置云服务器")]),s._v(" "),a("p",[s._v("设置tlinux云开发机支持ssh-public-key登录")]),s._v(" "),a("div",{staticClass:"language-linux line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /etc/ssh/sshd_config\n\nAllowAgentForwarding yes #vscode使用TcpForwarding模式，需要把这两项配置打开\nAllowTcpForwarding yes #vscode使用TcpForwarding模式，需要把这两项配置打开\nRSAAuthentication yes #打开RSA签名认证模式\nPubkeyAuthentication yes #打开公钥认证模式\n# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2\n# but this is overridden so installations will only check .ssh/authorized_keys\nAuthorizedKeysFile .ssh/authorized_keys \n#设置默认的公钥保存文件，设置的值是.ssh/authorized_keys，设置后实际读取的文件为~/.ssh/authorized_keys\n\nsystemctl restrt sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"本地开发安装vscode插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地开发安装vscode插件"}},[s._v("#")]),s._v(" 本地开发安装vscode插件")]),s._v(" "),a("p",[s._v("安装插件"),a("code",[s._v("Remote SSH")])]),s._v(" "),a("p",[s._v("安装完成填写连接服务器的IP、端口、登录用户等信息，点击连接")]),s._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("h3",{attrs:{id:"_1-解決rpm-conflicts-with-file-from-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解決rpm-conflicts-with-file-from-package"}},[s._v("#")]),s._v(" 1. 解決rpm conflicts with file from package")]),s._v(" "),a("ul",[a("li",[s._v("安裝的時候增加–replacefiles參數")]),s._v(" "),a("li",[a("code",[s._v("rpm -ivh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm --replacefiles")])])]),s._v(" "),a("h3",{attrs:{id:"_2-php点击查看函数声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-php点击查看函数声明"}},[s._v("#")]),s._v(" 2. php点击查看函数声明")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装插件"),a("code",[s._v("php intelliSecse")])])]),s._v(" "),a("li",[a("p",[s._v("修改扩展设置\n找到插件"),a("code",[s._v("php intelliSecse")]),s._v("，点击该插件设置，选择【扩展设置】，点击配置文件setting，编辑 "),a("code",[s._v("php.executablePath")]),s._v(" 选项，修改为php安装路径（Linux为 / usr/bin/php）")])])]),s._v(" "),a("h3",{attrs:{id:"_3-php点击查看函数声明失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-php点击查看函数声明失败"}},[s._v("#")]),s._v(" 3. php点击查看函数声明失败")]),s._v(" "),a("ul",[a("li",[s._v("失败原因一般是PHP版本过低，"),a("a",{attrs:{href:"https://www.jianshu.com/p/1e23aba0a164",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装php7"),a("OutboundLink")],1),s._v("版本")]),s._v(" "),a("li",[s._v("安装成功后更改php可执行文件没有在$PATH中")]),s._v(" "),a("li",[s._v("运行"),a("code",[s._v("ln -s /usr/local/php/bin/php /usr/bin/php")])]),s._v(" "),a("li",[s._v("运行"),a("code",[s._v("php -v")]),s._v("查看是否成功")])]),s._v(" "),a("h3",{attrs:{id:"_4-vscode免密码登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vscode免密码登录"}},[s._v("#")]),s._v(" 4. vscode免密码登录")]),s._v(" "),a("p",[s._v("1）生成密钥文件")]),s._v(" "),a("p",[s._v("2）上传本地密钥到服务器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3） 配置打开密钥登录功能")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开SSH配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看确认下面两项配置 默认不需要修改配置")]),s._v("\nRSAAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nPubkeyAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当你完成全部设置，并以密钥方式登录成功后，再禁用密码登录")]),s._v("\nPasswordAuthentication no\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启SSH")]),s._v("\nsystemctl restart sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("4）本机vscode配置")]),s._v(" "),a("div",{staticClass:"language-config line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host liam\n  HostName X.X.X.X\n  User root\n  Port XX\n  IdentityFile //Users/liam/.ssh/id_rsa\n\nHost liam\n  HostName X.X.X.X\n  User root\n  Port 22\n  IdentityFile //Users/liam/XX.pem\n\nHost liam\n  HostName X.X.X.X\n  User root\n  Port 22\n  IdentityFile /d/XX.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);