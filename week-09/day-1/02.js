"use strict";

var http = require("http");

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("The path name is: " + req.url + "\nThe request method is the following: " + req.method + "\nThe current time is: " + new Date());
});

server.listen(3000, '127.0.0.1');
console.log("server is running");    //Ez a logolas csak akkor megy ki, ha fut a szerver. Es ebbol latom, hogy mukodik.
