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
console.log('--------');
var dns = require('dns');
console.log(dns.getServers());
console.log('--------');

// console.log('create client: redis-1.demo.dev' );
// var redis = require("redis"), client = redis.createClient(6379, 'redis-1.demo.dev', {});

// client.on('connect', function (){
//   console.log('connect');
// });

// client.on("error", function (err) {
//     console.log("error event - " + client.host + ":" + client.port + " - " + err);
// });
