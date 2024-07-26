(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{290:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" NGINX配置")]),s._v(" "),n("h2",{attrs:{id:"_1-基础特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础特点"}},[s._v("#")]),s._v(" 1. 基础特点")]),s._v(" "),n("ul",[n("li",[s._v("Nginx 专为性能优化而开发。\n"),n("ul",[n("li",[s._v("性能是其最重要的考量,实现上非常注重效率 。它支持内核 Poll 模型，能经受高负载的考验,有报告表明能支持高达 50,000 个并发连接数。")])])]),s._v(" "),n("li",[s._v("Nginx 具有很高的稳定性。\n"),n("ul",[n("li",[s._v("其它 HTTP 服务器，当遇到访问的峰值，或者有人恶意发起慢速连接时，很可能会导致服务器物理内存耗尽频繁交换，失去响应，只能重启服务器。例如当前 apache 一旦上到 200 个进程以上，web响应速度就明显非常缓慢了。而 Nginx 采取了分阶段资源分配技术，使得它的 CPU 与内存占用率非常低。")]),s._v(" "),n("li",[s._v("Nginx 官方表示在保持 10,000 个无活动连接时，它只占 2.5M 内存，所以类似 DOS 这样的攻击对 Nginx 来说基本上是毫无用处的。就稳定性而言，Nginx 比 lighthttpd 更胜一筹。")])])]),s._v(" "),n("li",[s._v("Nginx 支持热部署。\n"),n("ul",[n("li",[s._v("它的启动特别容易, 并且几乎可以做到 7*24 不间断运行，即使运行数个月也不需要重新启动。")]),s._v(" "),n("li",[s._v("你还能够在不间断服务的情况下，对软件版本进行升级。")])])])]),s._v(" "),n("h2",{attrs:{id:"_2-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用命令"}},[s._v("#")]),s._v(" 2. 常用命令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx配置文件位置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/nginx/conf.d\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx的启动")]),s._v("\nsystemctl start nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 热加载，重新加载配置文件")]),s._v("\nnginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试nginx是否正常")]),s._v("\nnginx –t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_3-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3. 配置")]),s._v(" "),n("h3",{attrs:{id:"_3-1-配置示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-配置示例"}},[s._v("#")]),s._v(" 3.1 配置示例")]),s._v(" "),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#指令名 指令值;  #全局块，主要设置Nginx服务器整体运行的配置指令\nworker_processes  1;\n\n#events块,主要设置,Nginx服务器与用户的网络连接,这一部分对Nginx服务器的性能影响较大\nevents {\n    worker_connections  1024;\n}\n\n#http块，是Nginx服务器配置中的重要部分，代理、缓存、日志记录、第三方模块配置...  \nhttp {\n\n  #指令名 指令值;\n  include       mime.types;\n  default_type  application/octet-stream;\n  sendfile        on;\n  keepalive_timeout  65;\n\n  #server块，是Nginx配置和虚拟主机相关的内容\n  server {\n    listen       80;\n    server_name  localhost;\n    \n    #location块，基于Nginx服务器接收请求字符串与location后面的值进行匹配，对特定请求进行处理\n    location / {\n      #指令名 指令值;\n      root   html;\n      index  index.html index.htm;\n    }\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n      root   html;\n    }\n  }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("nginx.conf配置文件中默认有三大块：全局块、events块、http块")]),s._v(" "),n("p",[s._v("http块中可以配置多个server块，每个server块又可以配置多个location块")]),s._v(" "),n("h3",{attrs:{id:"_3-2-全局块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-全局块"}},[s._v("#")]),s._v(" 3.2 全局块")]),s._v(" "),n("p",[s._v("全局块是默认配置文件从开始到events块之间的一部分内容，主要设置一些影响Nginx服务器整体运行的配置指令，因此，这些指令的作用域是Nginx服务器全局。")]),s._v(" "),n("p",[s._v("通常包括配置运行Nginx服务器的用户（组）、允许生成的worker process数、Nginx进程PID存放路径、日志的存放路径和类型以及配置文件引入等")]),s._v(" "),n("h3",{attrs:{id:"_3-3-events块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-events块"}},[s._v("#")]),s._v(" 3.3 events块")]),s._v(" "),n("p",[s._v("events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等。")]),s._v(" "),n("p",[s._v("这一部分的指令对Nginx服务器的性能影响较大，在实际配置中应该根据实际情况灵活调整")]),s._v(" "),n("h3",{attrs:{id:"_3-4-http块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-http块"}},[s._v("#")]),s._v(" 3.4 http块")]),s._v(" "),n("p",[s._v("http块是Nginx服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块的配置都可以放在这个模块中。")]),s._v(" "),n("p",[s._v("前面已经提到，http块中可以包含自己的全局块，也可以包含server块，server块中又可以进一步包含location块，在本书中我们使用“http全局块”来表示http中自己的全局块，即http块中不包含在server块中的部分。")]),s._v(" "),n("p",[s._v("可以在http全局块中配置的指令包括文件引入、MIME-Type定义、日志自定义、是否使用sendfile传输文件、连接超时时间、单连接请求数上限等。")]),s._v(" "),n("h3",{attrs:{id:"_3-5-server块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-server块"}},[s._v("#")]),s._v(" 3.5 server块")]),s._v(" "),n("p",[s._v("server块和“虚拟主机”的概念有密切联系。")]),s._v(" "),n("p",[s._v("虚拟主机，又称虚拟服务器、主机空间或是网页空间，它是一种技术。该技术是为了节省互联网服务器硬件成本而出现的。这里的“主机”或“空间”是由实体的服务器延伸而来，硬件系统可以基于服务器群，或者单个服务器等。虚拟主机技术主要应用于HTTP、FTP及EMAIL等多项服务，将一台服务器的某项或者全部服务内容逻辑划分为多个服务单位，对外表现为多个服务器，从而充分利用服务器硬件资源。从用户角度来看，一台虚拟主机和一台独立的硬件主机是完全一样的。")]),s._v(" "),n("p",[s._v("在使用Nginx服务器提供Web服务时，利用虚拟主机的技术就可以避免为每一个要运行的网站提供单独的Nginx服务器，也无需为每个网站对应运行一组Nginx进程。虚拟主机技术使得Nginx服务器可以在同一台服务器上只运行一组Nginx进程，就可以运行多个网站。")]),s._v(" "),n("p",[s._v("在前面提到过，每一个http块都可以包含多个server块，而每个server块就相当于一台虚拟主机，它内部可有多台主机联合提供服务，一起对外提供在逻辑上关系密切的一组服务（或网站）。")]),s._v(" "),n("p",[s._v("和http块相同，server块也可以包含自己的全局块，同时可以包含多个location块。在server全局块中，最常见的两个配置项是本虚拟主机的监听配置和本虚拟主机的名称或IP配置。")]),s._v(" "),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('server {\n  listen              443 ssl http2;\n  listen              [::]:443 ssl http2;\n  server_name         domain.com *.domain.com;\n  root                /var/www/domain/dist;\n  # SSL\n  ssl_certificate     /etc/nginx/ssl/domain.com.pem;\n  ssl_certificate_key /etc/nginx/ssl/domain.com.key;\n  # security\n  include             sites-available/security.conf;\n  # index.html fallback\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n  # reverse proxy\n  location /api/ {\n    proxy_pass http://127.0.0.1:8080/;\n    include    sites-available/proxy.conf;\n  }\n  # allow safe files\n  location ~* \\.(?:css(\\.map)?|js(\\.map)?|ttf|ttc|otf|eot|woff2?|svgz?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv|pdf|docx?|dotx?|docm|dotm|xlsx?|xltx?|xlsm|xltm|pptx?|potx?|pptm|potm|ppsx?)$ {\n    add_header Access-Control-Allow-Origin "*";\n    add_header Cache-Control "public";\n    expires    30d;\n  }\n  # additional config\n  include sites-available/general.conf;\n}\n# HTTP redirect\nserver {\n  listen      80;\n  listen      [::]:80;\n  server_name .domain.com;\n  return      301 https://domain.com$request_uri;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# gzip\ngzip            on;\ngzip_vary       on;\ngzip_proxied    any;\ngzip_comp_level 6;\ngzip_types      text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_3-6-location配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-location配置"}},[s._v("#")]),s._v(" 3.6 location配置")]),s._v(" "),n("h4",{attrs:{id:"_3-6-1-location-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-1-location-配置"}},[s._v("#")]),s._v(" 3.6.1 location 配置")]),s._v(" "),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("location [ = | ~ | ~* | ^~ ] uri { ... }\nlocation @name { ... }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("修饰符匹配优先级从高到低依次为")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("location =")]),s._v(" 表示精确匹配。只有请求的url路径与后面的字符串完全相等时，才会命中。如果已经匹配成功，就停止继续向下搜索并立即处理此请求")]),s._v(" "),n("li",[n("code",[s._v("location ^~")]),s._v(" 表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找")]),s._v(" "),n("li",[n("code",[s._v("location ~")]),s._v(" 表示该规则是使用正则定义的，区分大小写")]),s._v(" "),n("li",[n("code",[s._v("location ~*")]),s._v(" 表示该规则是使用正则定义的，不区分大小写")]),s._v(" "),n("li",[n("code",[s._v("location /a")]),s._v(" 普通前缀匹配，优先级低于带参数前缀匹配")]),s._v(" "),n("li",[n("code",[s._v("location /")]),s._v(" 任何没有匹配成功的，都会匹配这里处理")])]),s._v(" "),n("p",[s._v("注意：在浏览器传送URI时对一部分字符进行URL编码，比如空格被编码为"),n("code",[s._v("%20")]),s._v("，问号被编码为"),n("code",[s._v("%3f")]),s._v("等。"),n("code",[s._v("～")]),s._v("有一个特点是，它对uri中的这些符号将会进行编码处理。比如，如果location块收到的URI为"),n("code",[s._v("/html/%20/data")]),s._v("，则当Nginx服务器搜索到配置为"),n("code",[s._v("～ /html/ /data")]),s._v("的location时，可以匹配成功")]),s._v(" "),n("h4",{attrs:{id:"_3-6-2-location-案例分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-2-location-案例分析"}},[s._v("#")]),s._v(" 3.6.2 location 案例分析")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n  server_name liam.com;\n  location ^~ /document {\n      return 701; # 用这样的方式，可以方便的知道请求到了哪里\n  }\n  location /doc {\n    return 702;\n  }\n  location ~* ^/doc$ {\n    return 703; \n  }\n\n  location /use {\n    return 704;\n  }\n  location /user {\n    return 705;\n  }\n\n  location ~ ^/tes[a-z]+ {\n    return 706;\n  }\n  location ~ ^/te[a-z]+ {\n    return 707;\n  }\n\n  location ~ ^/ima[a-z]+ {\n    return 708;\n  }\n\n  location ~ ^/image[a-z]+ {\n    return 709;\n  }\n}\n# 修改本机hosts文件 127.0.0.1 liam.com\n# curl -I liam.com/document 查看返回码，可以方便的知道请求到了哪里\nliam.com/document 701 ^~ 命中以后不会再搜寻正则匹配\nliam.com/doc 703 ^~ 按照上述的规则，显然第三个正则匹配会有更高的优先级\nliam.com/userName 705 前缀匹配下，返回最长匹配的 location，与 location 所在位置顺序无关\nliam.com/test 706 \nliam.com/images 708 正则匹配是使用文件中的顺序，先匹配成功的返回\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("h4",{attrs:{id:"_3-6-3-location-uri结尾带不带"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-3-location-uri结尾带不带"}},[s._v("#")]),s._v(" 3.6.3 location URI结尾带不带 /")]),s._v(" "),n("p",[s._v("关于 URI 尾部的 / 有三点也需要说明一下。第一点与 location 配置有关，其他两点无关。")]),s._v(" "),n("ul",[n("li",[s._v("location 中的字符有没有 / 都没有影响。也就是说 /user/ 和 /user 是一样的。")]),s._v(" "),n("li",[s._v("如果 URI 结构是 "),n("code",[s._v("https://liam.com/")]),s._v(" 的形式，尾部有没有 / 都不会造成重定向。因为浏览器在发起请求的时候，默认加上了 / 。虽然很多浏览器在地址栏里也不会显示 / 。这一点，可以访问baidu验证一下。\n如果 URI 的结构是 "),n("code",[s._v("https://liam.com/some-dir/")]),s._v(" 。尾部如果缺少 / 将导致重定向。因为根据约定，URL 尾部的 / 表示目录，没有 / 表示文件。所以访问 "),n("code",[s._v("/some-dir/")]),s._v(" 时，服务器会自动去该目录下找对应的默认文件。如果访问 "),n("code",[s._v("/some-dir")]),s._v(" 的话，服务器会先去找 "),n("code",[s._v("some-dir")]),s._v(" 文件，找不到的话会将 "),n("code",[s._v("some-dir")]),s._v(" 当成目录，重定向到 "),n("code",[s._v("/some-dir/")]),s._v("，去该目录下找默认文件。")])]),s._v(" "),n("h4",{attrs:{id:"_3-6-4-location-name的用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-4-location-name的用法"}},[s._v("#")]),s._v(" 3.6.4 location @name的用法")]),s._v(" "),n("p",[s._v("@用来定义一个命名location。主要用于内部重定向，不能用来处理正常的请求。其用法如下")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("location / {\n  try_files $uri $uri/ @custom\n}\nlocation @custom {\n  # ...do something\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_3-7-虚拟目录alias和root"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-虚拟目录alias和root"}},[s._v("#")]),s._v(" 3.7 虚拟目录alias和root")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("alias")]),s._v("指定的目录是准确的，即location匹配访问的path目录下的文件直接是在alias目录下查找的；")]),s._v(" "),n("li",[n("code",[s._v("root")]),s._v("指定的目录是location匹配访问的path目录的上一级目录，这个path目录一定要是真实存在root指定目录下的；")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /data 目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--img\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--logo.png\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--header.png\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--images\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--banner.png\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--index.png\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('location /test/ {\n  alias /data/images/;\n}\n# http://XXX.com/test/banner.png 访问成功\n# alias虚拟目录配置中，location匹配的path目录如果后面不带"/"，那么访问的url地址中这个path目录后面加不加"/"不影响访问，访问时它会自动加上"/"；\n# 但是如果location匹配的path目录后面加上"/"，那么访问的url地址中这个path目录必须要加上"/"，访问时它不会自动加上"/"。如果不加上"/"，访问就会失败！\n# 即 /test/ alias /data/images 会导致访问失败\n\nlocation ~ ^/im[a-z]+/ {\n  root /data/;\n}\n# http://XXX.com/images/banner.png 访问成功\n# http://XXX.com/img/logo.png 访问成功\n# root目录配置中，location匹配的path目录后面带不带"/"，都不会影响访问。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"_3-8-端口转发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-端口转发"}},[s._v("#")]),s._v(" 3.8 端口转发")]),s._v(" "),n("div",{staticClass:"language-config line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server{\n  listen 80;\n  server_name  liam.com;\n  index  index.php index.html index.htm;\n\n  location / {\n    proxy_pass  http://liamhuo.com:8080;\n\n    # 保留代理之前的host 包含客户端真实的域名和端口号\n    proxy_set_header Host $proxy_host;\n\n    # 保留代理之前的真实客户端ip\n    proxy_set_header X-Real-IP $remote_addr;\n    \n    # 这个Header和X-Real-IP类似，但它在多级代理时会包含真实客户端及中间每个代理服务器的IP\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n    # 表示客户端真实的协议（http还是https）\n    proxy_set_header X-Forwarded-Proto $scheme;\n  }\n  location /data/ {\n    proxy_pass  http://liamhuo.com/;\n  }\n  location /user/ {\n    proxy_pass  http://liamhuo.com;\n  }\n  # 在配置proxy_pass代理转发时，如果后面的url加/，表示绝对根路径；如果没有/，表示相对路径\n  # liam.com/data/index.html => liamhuo.com/index.html\n  # liam.com/user/index.html => liamhuo.com/user/index.html\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);