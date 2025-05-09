---
meta:
  - name: description
    content: 前端console学习
  - name: keywords
    content: 前端console学习,console,console.log,前端日志
---
# 前端console日志打印

## 1. console 打印方法

### 1.1 log\info

`console.info` 和 `console.log` 的作用是几乎完全一样的，也是在控制台中打印信息，只不过打印时的样式可能与 console.log 略有区别。

在这里需要说明一下，Console 对象并不是javascript的内置对象，而是浏览器的内置对象，因此在控制台中的输出样式和各浏览器相关。

部门浏览器的输出样式可能会有所不同，比如info信息输出的前面会有一个小图标，表示这是一个信息提示。

### 1.2 error

`console.error` 用于打印错误信息，通常会以红色字体显示，并且在控制台中会有一个小图标表示这是一个错误提示。

### 1.3 warn

`console.warn` 用于打印警告信息，通常会以黄色字体显示，并且在控制台中会有一个小图标表示这是一个警告提示。

### 1.4 table

`console.table` 用于打印表格信息，通常会以表格的形式显示，并且在控制台中会有一个小图标表示这是一个表格提示。

![console日志打印](/img/console日志打印-1.jpg)


表格
多个数据打印
样式
封装


## 参考文献

[Eslint中文网](https://cn.eslint.org/docs/rules/)
