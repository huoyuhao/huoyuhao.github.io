# 我的个人博客

[博客网址](https://blog.liamhuo.com/)

## 部署安装

```bash
git clone git@github.com:huoyuhao/huoyuhao.github.io.git blog
cd blog
npm install
npm run dev # 启动本地开发服务器
npm run build # 更新博客目录 & 构建静态文件
npm run lint # 检查代码规范
npm run update # 更新博客目录
```

## Github 配置

[GitHub Pages 搭建个人博客](https://docs.github.com/zh/pages/quickstart)

- 选择配置项目Settings -> Pages -> Custom domain 输入自定义域名
- 本地运行npm run build后上传编译的静态文件