var express = require('express');
var app = express();
var i = 0;
app.get('/', function (req, res) {
  console.log('request #',i);
  res.send({request: i, state:1});
  i++;
});

console.log('Hello world');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening');
  console.log('test');

});
