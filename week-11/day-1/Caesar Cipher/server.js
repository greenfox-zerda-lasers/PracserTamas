"use strict";

const cors = require('cors');
var express = require("express");
var bodyParser = require('body-parser')
var mysql = require("mysql");
var app = express();
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(cors());


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jelszo1",
    database: "caesar_cipher"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/decode/all', function(req, res) {
    // con.query("SELECT * FROM codes;",function(err,rows){
    //     console.log("Data received from Db:\n");
    //     console.log(rows);
    //     res.send(rows);
    // });
    var list = {
  "all": [
    "lorem ipsum dolor sit",
    "consectetur adipisicing elit",
    "ut labore et dolore magna aliqua"
    ]
    };
    console.log('request');
    res.send(list);
});


app.post('/decode', function(req, res) {
    // con.query('INSERT INTO codes(text) VALUES("' + req.body.text + '")',function(err,rows){
    //     con.query("SELECT * FROM codes ORDER BY id DESC LIMIT 1",function(err,rows){
    //         res.send(rows[0]);
    //     })
    // })
    var item = {
        "status": "ok",
        "text": "lorem ipsum dolor sit"
    };
    res.status(200).json(item);
});


var logic = function (text, shift) {
  text = text.split('');
  var charCoded = [];
  text.forEach(function (item) {
    console.log(item.charCodeAt(0));
    charCoded.push(parseInt(item.charCodeAt(0)) + parseInt(shift));
  });
  console.log(charCoded);
  var decodedText = [];
  charCoded.forEach(function (item){
    decodedText.push(String.fromCharCode(item));
  });
  console.log(decodedText);
  return decodedText.join('');
}

app.listen(3000);
console.log("server is running");
