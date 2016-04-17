//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// freecodecamp backend api 
//
var router = express();
var server = http.createServer(router);

router.use('/',express.static(path.resolve(__dirname, 'client')));

router.get('/test', function (req, res) {
  res.send('Hello World!');
});

// Timestamp Microservice
router.get('/api/timestamp', function (req, res) {
  res.send('Timestamp');
});
var timeStamp = require("./my_modules/timestamp.js");
router.get('/api/timestamp/:para', function (req, res) {
  var para = req.params.para;
  var result = timeStamp.parseDate(para);
  res.json(result);
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
