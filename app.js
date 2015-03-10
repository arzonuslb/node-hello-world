var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

console.log('Hello world: Demo test');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

var redis = require("redis"), client = redis.createClient(6379, '127.0.0.1', {});

client.on('connect', function (){
  console.log('connect');
});

client.on("error", function (err) {
    console.log("error event - " + client.host + ":" + client.port + " - " + err);
});
