---
meta:
- name: description
  content: NPM依赖包
- name: keywords
  content: npm依赖包,npm,依赖包
---

# NPM依赖包

## 1. 常用命令

```shell
npm -v # 查看版本
npm install -g # 全局安装依赖包
npm install -D | npm install --save-dev # 安装开发依赖包
npm install -S | npm install --save # 安装生产依赖包
npm install --save-bundle # 安装捆绑依赖包
npm install --registry=https://registry.npm.taobao.org # 安装package.json中所有的包，本次安装从设置的镜像中下载，不改变npm原有配置的仓库镜像

npm config list -l # 查看 npm 的配置
npm config get registry # 查看当前本地npm配置的仓库镜像
npm config set registry https://registry.npm.taobao.org # 设置本地npm配置的仓库镜像
npm config set init.author.name liamhuo # 修改 npm 默认配置
npm config delete init.author.name # 删除 npm 指定配置

npm -g list # 查看所有全局安装的包
npm ls # 查看当前仓库依赖树上所有包的版本信息
npm view <package-name> # 查看包的信息
npm uninstall <包名>  # 卸载依赖包
npm update <包名> # 更新依赖包到最新
npm install <-g>  <包名>@<版本号> # 安装指定版本的依赖包 例如：npm install -g npm@18.15.0 ,升级npm 到18.15.0版本
npm cache verify # 检查缓存是否损坏 清除缓存
npm cache clean --force # 清除缓存
npm prune # 移除无关的模块(package.json 中没有的)
npm dedupe # 优化项目中的依赖树。它通过查找重复的依赖包并将其合并到依赖树的更高层级，从而减少重复的包，优化项目的结构
npm outdated # 查看当前项目依赖包的最新版本信息

npm login # 登陆 
npm publish # 发布
# 如果使用淘宝镜像 登陆会报错 code E409 请使用如下命令
npm login --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org
# 并行执行 & 同时的平行执行
npm run script1 & npm run script2

# 继发执行 && 前一个任务成功，才执行下一个任务
npm run script1 && npm run script2
```

### 1.1 版本号

+ ~：匹配最新的版本号，例如 ~2.3.0 会匹配最新的 2.3.x 版本
+ ^：匹配次要的版本号，例如 ^2.0.0 会匹配最新的 2.x.x 版本
+ >、<、>=、<=：匹配区间的版本号：例如 >=2.0.0 会匹配 2.0.0 版本之后的版本
+ * 任意版本（>=0.0.0）
+ 16.x 匹配主要版本（>=16.0.0 <17.0.0）
+ 16.3.x 匹配主要版本和次要版本（>=16.3.0 <16.4.0）

## 2. peerDependencies、devDependencies 和 Dependencies

### 2.1 项目打包

项目打包不管是 webpack 还是 vite，都是依赖解析，loader处理，所以无论依赖放在 devDependencies 还是放在 dependencies ，都会被打包工具解析、构建，最后都打进 dist 产物中

比如将vue放在devDependencies中，打包后依然会存在dist中，因为打包工具会解析vue，并处理vue文件，最后将处理后的vue文件打包进dist中

### 2.2 devDependencies 和 dependencies区别

devDependencies 和 dependencies的区别核心体现在 npm包 中。
+ 只要开发的项目是发npm包提供给外部、其他业务项目使用的，需要非常注意依赖的安装地方，因为搞不好很容易在业务使用中会出现bug。
+ 如果只是自己项目用，不需要发npm包的话，把依赖安装到 devDependencies 或者 dependencies 中，实质上是没有任何区别的
+ 当其他开发者安装你的包时，npm 会自动安装 dependencies 中列出的所有依赖项
+ 默认情况下，当其他开发者安装你的包时，npm 不会安装 devDependencies 中的依赖项
+ 包的使用者需要确保他们的项目环境能够兼容并支持 dependencies 中的所有依赖项
+ 包的使用者不需要关心 devDependencies，因为它们不会影响包在生产环境中的使用

### 2.3 peerDependencies

peerDependencies 也是 package.json 中的一个属性，翻译过来是对等依赖的意思
+ 字段用于声明一个 package 与依赖它的宿主应用程序所使用的其他 package 之间的兼容性限制
+ 其中的包在 npm install 时并不会被安装；打包项目时，其中的包也不会被打包进去
+ 与 dependencies 和 devDependencies 不同，peerDependencies 不会自动安装依赖的包，而是要求使用当前包的项目自身已经安装了兼容版本的这些依赖包。
+ npm 6 及以下版本中，默认情况下不会自动安装 peerDependencies，只是在安装后给出警告提示，所以一般不会出现因自动安装 peerDependencies 而导致的冲突问题
+ npm 7 及以上版本默认会尝试自动安装 peerDependencies 中声明的依赖包。当你安装一个包时，如果该包的 package.json 中定义了 peerDependencies，npm 会检查项目中是否已经安装了兼容版本的这些依赖包。如果没有安装，npm 会自动将它们安装到项目的根目录下的 node_modules 中
+ 决定一个 package 是否是 dependencies 或 peerDependencies 时，唯一需要考虑的是它是否会对宿主应用程序正在使用或必须安装的其他 package 造成兼容性限制

### 2.4 peerDependencies 冲突

当一个包的 peerDependencies 和另一个包的 dependencies 存在冲突时，npm 会优先安装 peerDependencies 中的包，而忽略 dependencies 中的包。

#### 2.4.1 npm install --legacy-peer-deps

+ npm 7.0.0 版本引入的一个新的命令行选项，用于解决依赖冲突的问题。
+ 会让 npm 采用旧版本的 peerDependencies 解析策略，忽略冲突并按照旧方式进行安装
+ npm 会采用旧版本（npm 6 及以下）的 peerDependencies 解析策略，即忽略 peerDependencies 的自动安装，也不会对 peerDependencies 之间的版本冲突进行严格检查
+ 这在处理旧项目或某些复杂依赖场景时比较有用，但同样可能带来兼容性问题，比如某个功能依赖于特定版本的 peerDependencies 的新特性，但实际安装的是旧版本，就可能导致该功能无法正常工作

#### 2.4.2 npm install --force

+ 命令会强制 npm 忽略 peerDependencies 冲突，继续进行安装。但这种方法可能会导致项目中安装不兼容的依赖版本，从而引发运行时错误，因此应谨慎使用

### 2.5 dependencies和peerDependencies

#### 2.5.1 dependencies

+ 列出的是你的包在运行时所必需的依赖项。这些依赖项是你的包实现其核心功能所依赖的其他 npm 包。
+ 当用户安装你的包时，npm 会自动安装 dependencies 中指定的所有依赖项，并将它们下载到用户项目的 node_modules 目录下
+ 如果你的包的核心功能依赖于某个库，那么这个库应该被列为 dependencies，例如，一个用于处理日期和时间的包依赖于 moment 库来进行日期计算和格式化，那么 moment 就应该被添加到 dependencies 中。
+ 你创建一个独立的、可复用的模块，并且该模块包含了实现其功能所需的所有依赖时，使用 dependencies 可以确保模块在不同的项目中都能正常工作

#### 2.5.2 peerDependencies

+ 用于声明你的包在运行时所依赖的其他包，并且期望这些依赖项由使用你的包的项目本身提供
+ peerDependencies 不会被自动安装，而是要求用户的项目中已经安装了兼容版本的这些依赖项
+ 当你的包是一个插件或扩展，需要与某个特定的主框架或库配合使用时，应该将主框架或库列为 peerDependencies。例如，一个 React 组件库依赖于 React 和 ReactDOM，那么 React 和 ReactDOM 就应该被列为 peerDependencies，因为使用该组件库的项目应该已经安装了 React 和 ReactDOM。
+ 在某些情况下，多个包可能依赖于同一个库，如果每个包都将该库列为 dependencies，可能会导致项目中出现多个版本的同一个库，增加项目的体积和复杂度。使用 peerDependencies 可以让项目统一管理依赖，避免重复安装
+ npm 7 开始，默认情况下 npm 会尝试自动安装 peerDependencies 中声明的依赖项，但如果存在版本冲突，仍然需要手动解决

## 3. npm依赖管理

### 3.1 npm安装机制

![npm安装依赖](/img/npm安装依赖.png)

npm install 的执行过程大致如下：
+ 首先检查config，获取npm的配置，优先级如上图
+ 检查项目中是否存在package-lock.json文件。如果有，则检查package.json和package-lock.json是否一致，具体检查如上图
+ 如果没有，则根据package.json构建依赖树
  + 不管其是直接依赖还是子依赖的依赖，优先将其放置在 node_modules 根目录
  + 当遇到相同模块时，判断已放置在依赖树的模块版本是否符合新模块的版本范围，如果符合则跳过，不符合则在当前模块的 node_modules 下放置该模块
+ 检查缓存，如果有缓存，则直接从缓存内容解压到node_modules中。如果没有缓存，则先从npm远程仓库下载包资源，检查包的完整性，并添加到缓存，同时解压到node_modules中。
+ 生成package-lock.json

### 3.2 npm缓存机制

npm 缓存机制是为了提高依赖包的安装速度，避免重复下载。npm 缓存机制分为两部分：缓存目录和缓存文件。

+ 缓存目录：npm 缓存目录位于用户主目录下的 .npm 目录中，其中包含了所有下载的依赖包。
+ 缓存文件：npm 缓存文件位于缓存目录下的 _cacache 目录中，其中包含了所有下载的依赖包的元数据和内容。

npm 缓存机制的工作原理如下：
+ 当 npm 安装依赖包时，首先会检查缓存目录中是否存在该依赖包的缓存文件。如果存在，则直接从缓存文件中解压到 node_modules 中，无需再次下载。
+ 如果缓存目录中不存在该依赖包的缓存文件，则从 npm 远程仓库下载依赖包，并添加到缓存目录中。然后从缓存文件中解压到 node_modules 中。

### 3.3 npm依赖冲突

当两个依赖包依赖同一个包的不同版本时，就会产生依赖冲突。例如，A 依赖 B@1.0.0，C 依赖 B@2.0.0，那么在安装 A 和 C 时，就会产生依赖冲突。

npm 解决依赖冲突的策略是：优先安装依赖树的叶子节点，然后逐层向上安装。例如，在安装 A 和 C 时，npm 会先安装 B@1.0.0，然后再安装 B@2.0.0。

### 3.4 npm依赖扁平化

在npm早期版本（npm v2），其设计非常简单，在安装依赖时候，都是将依赖安装在其"自己"的node_modules下，然而这样的node_modules虽然结构简单明了，但是对于大型项目非常不友好。其中可能存在很多重复的依赖包从而形成"依赖地狱"，导致浪费空间资源，并且安装过程过慢。因此在npm v3之后，npm构建依赖树采用了扁平化结构。

npm 依赖扁平化的目的是为了减少依赖包的重复安装，提高安装速度。

npm 依赖扁平化的策略是
+ 安装模块时，不管其是直接依赖还是子依赖的依赖，优先将其安装在 node_modules 根目录
+ 当安装到相同模块时，判断已安装的模块版本是否符合新模块的版本范围，如果符合则跳过，不符合则在当前模块的 node_modules 下安装该模块

模块查找流程
+ 在当前模块路径下搜索
+ 在当前模块 node_modules 路径下搜素
+ 在上级模块的 node_modules 路径下搜索
+ ...
+ 直到搜索到全局路径中的 node_modules

### 3.5 npm dedupe

因为模块的安装顺序会影响依赖树的结构，所以扁平化结构还是会存在重复下载的情况

```
node_modules
├── A@1.0.0
│── B@1.0.0
├── C@1.0.0
    └── node_modules
        └── B@2.0.0
└── D@1.0.0
│   └── node_modules
│       └── B@2.0.0
```

如上图，A@1.0.0依赖了B@1.0.0，C@1.0.0依赖了B@2.0.0。此时如果再安装D@1.0.0依赖了B@2.0.0
结果是C@1.0.0和D@1.0.0有重复的B@2.0.0。但如果C@1.0.0比A@1.0.0先安装，那么B@2.0.0就能被提到上级node_modules被复用。
对此，提供了npm dedupe指令，进行全局去重: 遍历依赖树，把重复的兼容版本移动到项目根目录的node_modules下，利用set数据结构进行去重。

安装项目依赖时：使用 `npm install --prefer-dedupe` 或者 `npm config set prefer-dedupe true`，在安装过程中，要优先选择重复包数据删除而不是包的新颖性

工作原理
+ npm dedupe 首先会扫描项目的 node_modules 目录，构建一个依赖树。这个依赖树包含了项目中所有直接和间接依赖的包及其版本信息
+ 在构建依赖树的过程中，npm dedupe 会查找那些在不同层级重复出现的包。这些重复的包可能是同一个包的不同版本，或者是同一个包的相同版本但出现在多个地方
+ npm dedupe 会尝试将这些重复的包合并到依赖树的更高层级：
  + 包的版本兼容：即合并后的版本需要满足所有依赖该包的包的版本要求。
  + 有版本冲突：即合并后的版本需要满足所有依赖该包的包的版本要求
+ 确定了可以合并的包，npm dedupe 会执行合并操作，将这些包移动到依赖树的更高层级
+ 合并操作完成后，npm dedupe 会更新项目的依赖树
+ npm dedupe 会清理 node_modules 目录中那些在合并过程中重复不必要的包

### 3.6 锁定依赖版本

为了解决 npm install 的不确定性问题，在 npm 5.x 版本新增了 package-lock.json 文件，而安装方式还沿用了 npm 3.x 的扁平化的方式

package-lock.json 的作用是锁定依赖结构，即只要你目录下有 package-lock.json 文件，那么你每次执行 npm install 后生成的 node_modules 目录结构一定是完全相同的

锁定依赖版本意味着在我们不手动执行更新的情况下，每次安装依赖都会安装固定版本。保证整个团队使用版本号一致的依赖。每次安装固定版本，无需计算依赖版本范围，大部分场景下能大大加速依赖安装时间

+ 升级依赖: 修改 package.json文件的依赖版本，执行 npm install
+ 降级依赖: 直接执行 npm install package@version(改动package.json不会对依赖进行降级)
+ 注意改动依赖后提交lock文件

package-lock.json 中已经缓存了每个包的具体版本和下载链接，不需要再去远程仓库进行查询，然后直接进入文件完整性校验环节，减少了大量网络请求，提升了依赖安装速度。

## 4. pnpm

### 4.1 背景 幽灵依赖

+ A的package.json的dependencies里有dayjs@1.0
+ B的package.json的dependencies里有dayjs@1.0
+ Myproject的package.json的dependencies里没有dayjs@1.0
但是Myproject的view.js有import dayjs@1.0 这个时候项目是可以跑起来的，为什么？ 下边补充一下上面提到的 node的寻包过程

首先在当前目录下的node_modules寻找，找到了就直接使用，找不到就会往上一级的node_modules寻找，直到找寻到磁盘根目录的node_modules 找不到 直接抛出对应错误。

其实简单来说 就是 项目里使用了，但是未在项目的package.json 中定义的包。就是幽灵依赖。  按着原理来说 未在package.json中定义的包 不会被下载，但是它偏偏就存在了，也被下载了，这又是为什么呢？ 因为依赖提升，造成的副作用。所以说npm/yarn的这个方式，就是把相同的依赖包进行提升的方式，就会造成幽灵依赖。 换个言简意赅的说法就是：孙子突然和儿子一个地位、同一个级别， 本来想喊儿子的，发现有个孙子的名字和儿子的名字一样，好家伙 直接把这个孙子当成儿子了，这不就差辈分了嘛，也就是官网说的一个 安全问题。 此时这个问题又该怎么解决呢? 突然天空惊雷一响，pnpm 闪亮登场，

performant npm ，意味"高性能的 npm"。pnpm由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景。被誉为"最先进的包管理工具"

### 4.2 节省磁盘空间提高安装效率

pnpm通过使用硬链接和符号链接（又称软链接）的方式来避免重复安装以及提高安装效率。 
+ 硬链接：和原文件共用一个磁盘地址，相当于别名的作用，如果更改其中一个内容，另一个也会跟着改变
+ 符号链接（软链接）：是一个新的文件，指向原文件路径地址，类似于快捷方式

npm/yarn的依赖包都是存放在node_modules目录下，但是pnpm却不一样，pnpm会将依赖包的文件解压到全局store中，然后将node_modules中的文件链接到全局store中，这样就可以避免重复下载和安装依赖包，节省了大量的磁盘空间,并且安装速度更快

### 4.3 创建非扁平的node_modules目录结构

pnpm在安装时，将每一个包，和它们的依赖放到同一个文件夹中。将依赖提升至和包同一层级。同时，形成与依赖树结构一致的软链接，标注每一个依赖的位置
Node.js 解析依赖的时候，它使用这些依赖的真实位置，所以它不保留符号链接。而依赖包的真正位置，在.pnpm目录下。虽然.pnpm目录中是扁平化的结构，但是软连接的结构与依赖树完全一致。这样也解决了包的重复安装和对文件的使用权限问题。

### 4.4 区别

特点 |	NPM |	Yarn	| pnpm
-- | -- | -- | --
安装速度	    |较慢	|	较快	|	大部分情况下比 Yarn 块
依赖管理	    |直接安装到	| node_modules	|	通过缓存加速安装	中心化 store，依赖通过符号链接安装
磁盘空间使用	  |	高	|	中等		|最低，通过去重和链接机制
依赖冲突处理	  |	容易出现冲突		|通过锁文件和解析依赖减少冲突	|严格隔离各依赖版本，减少冲突
锁文件	      |	package-lock.json		|yarn.lock		|pnpm-lock.yaml
幽灵依赖问题	|	可能发生		|可能发生		|严格依赖树，避免幽灵依赖
monorepo支持	|	基础支持	|	功能丰富，包含插件系统		| 高效的工作空间管理，模块共享更优化
安装一致性	|	可能由于缓存和平台差异而不一致		| 高，一致性较好		|更高，通过全局硬链接机制确保一致性

## 5. 参考

[前端工程化 - 剖析npm的包管理机制](https://juejin.cn/post/6844904022080667661#heading-33)
[你真的理解 devDependencies 和 dependencies 的区别吗？](https://juejin.cn/post/7135795969370619918)