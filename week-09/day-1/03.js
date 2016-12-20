"use strict";

var express = require("express");
var app = express();

app.get('/*', function(req, res) {
  res.send("The path name is: " + req.url + "\nThe request method is the following: " + req.method + "\nThe current time is: " + new Date());
});

app.listen(3000);
console.log("server is running");   //Ez a logolas csak akkor megy ki, ha fut a szerver. Es ebbol latom, hogy mukodik.
