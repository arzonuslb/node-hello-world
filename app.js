var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

var _redis = require('redis');

var host = process.env.REDIS_HOST || 'redis-1.demo.dev';
var port = process.env.REDIS_PORT || '6379';
var db = process.env.REDIS_DB     || 0;

console.log('try to connect');
var connection = _redis.createClient(port, host);

connection.on('connect', function () {
  console.log('redis connected', host, port, 'database:', db);
});

connection.on('error', function (err) {
  console.log(err);
});

connection.on('close', function(){
  console.log('close redis connection');
});