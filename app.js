const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('holaa');
});

app.listen(4000, function () {
  console.log('escunchando puerto 4000');
});
