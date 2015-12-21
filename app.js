var express = require('express');
var app = express();
var i = 1;
app.get('/', function (req, res) {
  
  client.get("request", function(err, i){
    console.log('request #',i);
    res.send({request: i, state:1});
  });
  
  i++;
  client.set("request", i, function(){});
  
});

console.log('Hello world');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening');
  console.log('test');

});


var host = process.env.REDIS_HOST;
var port = process.env.REDIS_PORT;
var db   = process.env.REDIS_DB || 0;

console.log('connect to client: ', host, ":", port );

var redis = require("redis"), client = redis.createClient(port, host);

client.on('connect', function (){
  client.auth(process.env.REDIS_AUTH || "");
  console.log('connected to Redis');
  client.select(db || 0);
});
