/**
 * 更新blog配置目录
 */
const fs = require('fs');
const config = require(`${__dirname}/config-stencil.js`);

const dirPath = `${__dirname }/src`;
// 需要发布的目录
const dirList = ['web', 'network', 'frame', 'other'];
const reg = /(?<=[0-9]+-)(.*)(?=\.md)/ig;
const regFile = /(?<=[0-9]+?-)(.*)/ig;
const result = {};

// 读取文件目录，获取文件目录结构生成json
dirList.forEach((item) => {
  const path = `${dirPath }/${ item}`;
  const readDir = fs.readdirSync(path);
  result[`/${item}/`] = [];
  readDir.forEach((name) => {
    if (/\.+/.test(name)) { // 文件
      if (reg.test(name)) {
        const [fileName] = name.match(reg);
        result[`/${item}/`].push({ title: fileName, path: `/${item}/${name}` });
      }
    } else { // 文件夹
      const childPath = `${dirPath }/${ item }/${ name}`;
      const childDir = fs.readdirSync(childPath);
      const [fileName] = name.match(regFile);
      const parentData = { title: fileName, sidebarDepth: 2, children: [] };
      result[`/${item}/`].push(parentData);
      childDir.forEach((child) => {
        if (/\.+/.test(child)) { // 文件
          if (reg.test(child)) {
            const [fileName] = child.match(reg);
            parentData.children.push({ title: fileName, path: `/${item}/${name}/${child}` });
          }
        }
      });
    }
  });
});

// 获取config.js 变量数据 赋值
config.themeConfig.sidebar = result;

// 拼接数据 写入文件
fs.writeFileSync(`${dirPath}/.vuepress/config.js`, `module.exports = ${JSON.stringify(config)}`);
