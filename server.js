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

router.set('views', __dirname + '/views')
router.set('view engine', 'jade')
router.use(express.logger('dev'))

router.use(express.static(path.resolve(__dirname, 'client')));

router.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})
router.get('/test', function (req, res) {
  res.send('test Hello World!');
});

// Timestamp Microservice
router.get('/api/timestamp', function (req, res) {
  res.render('timestamp',
  { title : 'Timestamp' }
  )
});
var timeStamp = require("./my_modules/timestamp.js");
router.get('/api/timestamp/:para', function (req, res) {
  var para = req.params.para;
  var result = timeStamp.parseDate(para);
  res.json(result);
});

// request header parser
var whoami = require("./my_modules/whoami.js");
router.get('/api/whoami', function (req, res) {
  var result = whoami.parseHeader(req);
  res.json(result);
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
