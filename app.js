var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

console.log('Hello world: Demo test');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening');

});

console.log('connect to client: ', process.env.REDIS || 'redis-1.domain.dev' );
var redis = require("redis"), client = redis.createClient(6379, process.env.REDIS || 'redis-1.domain.dev', {});

client.on('ready', function (){
  console.log('connection ready');
});

client.on('connect', function (){
  console.log('connected to Redis');
});

client.on("error", function (err) {
  console.log("error event - " + client.host + ":" + client.port + " - " + err);
});
