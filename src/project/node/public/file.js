const http = require('http');
const fs = require('fs');
const template = require('art-template');
const server = http.createServer();
server.on('request', (req, res) => {
  const { url } = req;
  if (url === '/') {
    fs.readFile('./template.html', (error, data) => {
      if (error) {
        return res.end('404 NOT FOUND!');
      }
      fs.readdir('../public', (error, files) => {
        console.log(error);
        if (error) {
          return res.end('public dir is not found');
        }
        const htmlStr = template.render(data.toString(), {
          files,
        });
        res.end(htmlStr);
      }); // fs.readdir()用于读取一个文件目录，返回读取目录下的所有文件名的数组
    });
  } else {
    if (/\.+/.test(url)) { // 文件
      fs.readFile(`.${ url}`, (error, data) => {
        console.log(process.cwd() + url, error);
        if (error) {
          return res.end('404 not found');
        }
        res.end(data);
      });
    } else { // 文件夹
      fs.readFile('./template.html', (error, data) => {
        if (error) {
          return res.end('404 NOT FOUND!');
        }
        fs.readdir(`.${ url}`, (error, files) => {
          if (error) {
            return res.end('public dir is not found');
          }
          const fileArr = files.map((item) => {
            return `${url }/${ item}`;
          });
          const htmlStr = template.render(data.toString(), {
            files: fileArr,
          });
          res.end(htmlStr);
        });
      });
    }
  }
});
server.listen(3000, () => {
  console.log('server is running....');
});
