(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{309:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端git使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端git使用"}},[t._v("#")]),t._v(" 前端git使用")]),t._v(" "),s("h2",{attrs:{id:"_1-git常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-git常用命令"}},[t._v("#")]),t._v(" 1. git常用命令")]),t._v(" "),s("h3",{attrs:{id:"_1-1-初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-初始化"}},[t._v("#")]),t._v(" 1.1 初始化")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git clone git://...git newName")])]),t._v(" "),s("td",[t._v("检出仓库 重命名为newName")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git init")])]),t._v(" "),s("td",[t._v("命令把这个目录变成Git可以管理的仓库")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git init [project-name]")])]),t._v(" "),s("td",[t._v("新建一个目录，将其初始化为Git代码库")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分支"}},[t._v("#")]),t._v(" 1.2 分支")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git branch")])]),t._v(" "),s("td",[t._v("列出所有本地分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git branch -r")])]),t._v(" "),s("td",[t._v("列出所有远程分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git branch [branch-name]")])]),t._v(" "),s("td",[t._v("新建一个分支，但依然停留在当前分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git branch -d [branch-name]")])]),t._v(" "),s("td",[t._v("删除分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git push origin --delete [branch-name]")])]),t._v(" "),s("td",[t._v("删除远程分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git push origin [local-branch-name]:[origin-branch-name]")])]),t._v(" "),s("td",[t._v("新建的本地分支push到远程服务器")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git push [remote] --force")])]),t._v(" "),s("td",[t._v("强行推送当前分支到远程仓库，即使有冲突")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git push [remote] --all")])]),t._v(" "),s("td",[t._v("推送所有分支到远程仓库")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-切换分支"}},[t._v("#")]),t._v(" 1.3 切换分支")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git checkout -b [branch-name]")])]),t._v(" "),s("td",[t._v("新建一个分支，并切换到该分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git checkout [branch-name]")])]),t._v(" "),s("td",[t._v("切换到指定分支，并更新工作区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git checkout -b [local-branch-name] origin/[origin-branch-name]")])]),t._v(" "),s("td",[t._v("从远程仓库里拉取一条本地不存在的分支")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git checkout .")])]),t._v(" "),s("td",[t._v("恢复暂存区的所有文件到工作区")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-4-查看状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-查看状态"}},[t._v("#")]),t._v(" 1.4 查看状态")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git status")])]),t._v(" "),s("td",[t._v("显示有变更的文件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git diff [file-name]")])]),t._v(" "),s("td",[t._v("查看修改内容")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git difftool [file-name]")])]),t._v(" "),s("td",[t._v("实用工具查看修改内容")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-5-添加文件到暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-添加文件到暂存区"}},[t._v("#")]),t._v(" 1.5 添加文件到暂存区")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git add [file1] [file2] ...")])]),t._v(" "),s("td",[t._v("添加指定文件到暂存区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git add [dir]")])]),t._v(" "),s("td",[t._v("添加指定目录到暂存区，包括子目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git add .")])]),t._v(" "),s("td",[t._v("添加 "),s("strong",[t._v("当前目录")]),t._v(" 的所有文件到暂存区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git add -A .")])]),t._v(" "),s("td",[t._v("将 "),s("strong",[t._v("项目所有")]),t._v(" 的已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-6-提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-提交"}},[t._v("#")]),t._v(" 1.6 提交")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git commit -m [message]")])]),t._v(" "),s("td",[t._v("提交暂存区到仓库区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git rm [file-name]")])]),t._v(" "),s("td",[t._v("删除文件")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-7-拉取提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-拉取提交"}},[t._v("#")]),t._v(" 1.7 拉取提交")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git fetch [remote]")])]),t._v(" "),s("td",[t._v("下载远程仓库的所有变动")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git fetch")])]),t._v(" "),s("td",[t._v("git fetch 获取线上最新版信息记录，不合并")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git pull")])]),t._v(" "),s("td",[t._v("拉取远程分支到本地")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git push --set-upstream origin [branch-name]")])]),t._v(" "),s("td",[t._v("推送本地分支到远程仓库")])])])]),t._v(" "),s("ul",[s("li",[t._v("git pull是相当于从远程仓库获取最新版本，然后再与本地分支merge，即git pull = git fetch + git merge")]),t._v(" "),s("li",[t._v("相比起来，git fetch 更安全也更符合实际要求，在 merge 前，我们可以查看更新情况，根据实际情况再决定是否合并")])]),t._v(" "),s("h3",{attrs:{id:"_1-8-清空暂存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-清空暂存"}},[t._v("#")]),t._v(" 1.8 清空暂存")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git checkout .")])]),t._v(" "),s("td",[t._v("清空暂存区已修改和删除文件，新建文件无法清空")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git clean -d -f")])]),t._v(" "),s("td",[t._v("删除当前目录下没有被跟踪的文件和文件夹（即新建文件/夹）")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash")])]),t._v(" "),s("td",[t._v("把暂存区和工作区的改动保存起来")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash save 'message...'")])]),t._v(" "),s("td",[t._v("把暂存区和工作区的改动保存起来")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash list")])]),t._v(" "),s("td",[t._v("显示保存进度的列表")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash pop [–index] [stash_id]")])]),t._v(" "),s("td",[t._v("取出储藏中最后存入的工作状态进行恢复，会删除储藏")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash pop stash@{1}")])]),t._v(" "),s("td",[t._v("恢复指定的进度到工作区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash show -p")])]),t._v(" "),s("td",[t._v("查看堆栈中最新保存的stash和当前目录的差异")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash show stash@{1} -p")])]),t._v(" "),s("td",[t._v("查看堆栈中指定的stash和当前目录的差异")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash apply [–index] [stash_id]")])]),t._v(" "),s("td",[t._v("同git stash pop，不会删除储藏")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git stash clear")])]),t._v(" "),s("td",[t._v("删除所有存储的进度")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-9-合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-合并分支"}},[t._v("#")]),t._v(" 1.9 合并分支")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git merge [branch-name]")])]),t._v(" "),s("td",[t._v("合并分支到当前分支")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-10-撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-撤销"}},[t._v("#")]),t._v(" 1.10 撤销")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git checkout [file]")])]),t._v(" "),s("td",[t._v("恢复暂存区的指定文件到工作区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git checkout [commit] [file]")])]),t._v(" "),s("td",[t._v("恢复某个commit的指定文件到暂存区和工作区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git checkout .")])]),t._v(" "),s("td",[t._v("恢复暂存区的所有文件到工作区")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git reset [commit]")])]),t._v(" "),s("td",[t._v("重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git reset --hard")])]),t._v(" "),s("td",[t._v("重置暂存区与工作区，与上一次commit保持一致")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git reset [file]")])]),t._v(" "),s("td",[t._v("重置暂存区的指定文件，与上一次commit保持一致，但工作区不变")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git revert [commit]")])]),t._v(" "),s("td",[t._v("后者的所有变化都将被前者抵消，并且应用到当前分支")])])])]),t._v(" "),s("p",[t._v("reset：真实硬性回滚，目标版本后面的提交记录全部丢失了")]),t._v(" "),s("p",[t._v("revert：同样回滚，这个回滚操作相当于一个提价，目标版本后面的提交记录也全部都有")]),t._v(" "),s("h3",{attrs:{id:"_1-11-配置config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-配置config"}},[t._v("#")]),t._v(" 1.11 配置config")]),t._v(" "),s("p",[t._v("'设置提交代码时的用户信息命令如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v('git config [--global] user.name "[name]"')])]),t._v(" "),s("td",[t._v("设置提交用户名")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v('git config [--global] user.email "[email address]"')])]),t._v(" "),s("td",[t._v("设置提交用户邮箱")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-12-注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-注意事项"}},[t._v("#")]),t._v(" 1.12 注意事项")]),t._v(" "),s("ul",[s("li",[t._v("合并分支或者每天开始工作之前先拉取一下，将分支更新到最新")]),t._v(" "),s("li",[t._v("切换分支之前请先清空修改文件（可以删除/提交）")]),t._v(" "),s("li",[t._v("不要中文文件名，文件名只能是字母数字减号下划线")])]),t._v(" "),s("h3",{attrs:{id:"_1-13-常用命令事例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-13-常用命令事例"}},[t._v("#")]),t._v(" 1.13 常用命令事例")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送分支到远程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin feature_xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" br "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" feature_xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--delete")]),t._v(" feature_xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取远程分支到本地 / 并切换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" co "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" feature_xxx origin/feature_xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空工作区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交所有文件到工作区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--all")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 子模块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule init 初始化子模块\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update 更新子模块\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule foreach "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull 拉取所有子模块\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git submodule 更新到最新")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--recursive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--remote")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置upstream")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --unset-upstream\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase feature_XXX\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br")])]),s("h2",{attrs:{id:"_2-git合作开发命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-git合作开发命令"}},[t._v("#")]),t._v(" 2. git合作开发命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git remote add upstream https://.....")])]),t._v(" "),s("td",[t._v("设置upstream")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git remote -v")])]),t._v(" "),s("td",[t._v("查看")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git fetch upstream")])]),t._v(" "),s("td",[t._v("拉取")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("git rebase upstream/master")])]),t._v(" "),s("td",[t._v("拉取远程master覆盖本地")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-git个性化配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-git个性化配置"}},[t._v("#")]),t._v(" 3. git个性化配置")]),t._v(" "),s("p",[t._v("当我们使用git一段时间之后，想要使用一些git命令的简称，比如"),s("code",[t._v("st => status")]),t._v("，这时候我们学习如何进行个性化配置git命令。")]),t._v(" "),s("p",[t._v("首先找到"),s("code",[t._v("git")]),t._v("的默认配置文件")]),t._v(" "),s("ol",[s("li",[t._v("window文件路径"),s("code",[t._v("C:\\Users\\Administrator*\\.gitconfig")])]),t._v(" "),s("li",[t._v("linux/mac文件路径"),s("code",[t._v("~/.gitconfig")])])]),t._v(" "),s("p",[t._v("修改代码如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  autocrlf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  excludesfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXX")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXX")]),t._v("\n  email "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXX")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("在下面添加如下代码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" status\n  ci "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commit\n  co "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" checkout\n  br "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" branch\n  df "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" diff\n  dft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" difftool\n  dfs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("staged\n  dfts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" difftool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("staged\n  mr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" merge\n  mrt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mergetool\n  last "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("\n  ls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("all "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("decorate\n  rb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rebase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i\n  cp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cherry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pick\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("diff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  tool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bc4\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("difftool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  prompt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("difftool "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bc4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  cmd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:/XXX/BCompare.exe\\" "')]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cygpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("w $"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REMOTE")]),t._v('"\n'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("merge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  tool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bc4\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mergetool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  prompt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mergetool "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bc4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  #trustExitCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  cmd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:/XXX/BCompare.exe\\" "')]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REMOTE")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MERGED")]),t._v('"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("p",[t._v("其中"),s("code",[t._v("alias")]),t._v("里面的内容都是"),s("code",[t._v("git")]),t._v("命令的缩写\n"),s("code",[t._v("difftool")]),t._v("和"),s("code",[t._v("mergetool")]),t._v("是使用"),s("code",[t._v("BCompare")]),t._v("软件显示文件差异以及解决合并冲突")]),t._v(" "),s("h2",{attrs:{id:"_4-参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考文献"}},[t._v("#")]),t._v(" 4. 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/febobo/web-interview/issues/228",target:"_blank",rel:"noopener noreferrer"}},[t._v("说说你对git rebase 和 git merge的理解？区别"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);