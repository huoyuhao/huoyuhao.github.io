const express = require('express');
const app = express();

app.get('/crossDomain', (req, res) => {
  const { query } = req;
  const reqData = { name: 'liam' };
  console.log(query);
  if (query.callback) {
    const str = `${query.callback }(${ JSON.stringify(reqData) })`; // jsonp
    res.end(str);
  } else {
    res.end(JSON.stringify(reqData));
  }
});

app.get('/crossDomain2', (req, res) => {
  const reqData = { name: 'liam' };
  res.end(JSON.stringify(reqData));
});

app.use('/static', express.static('public'));

app.listen(3001, () => {
  console.log('App started on port 3001');
});
