"use strict";

var express = require("express");
var bodyParser = require('body-parser')
var mysql = require("mysql");
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("./public")) //Ezzel hivom meg a todom konyvtarat es mukodtetem a todot
// var newId = data.length

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jelszo1",
    database: "todoapp_database"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/todos', function(req, res) {
    con.query("SELECT * FROM todos;",function(err,rows){
        console.log("Data received from Db:\n");
        console.log(rows);
        res.status(200).send(JSON.stringify(rows));
    });
});

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + "../../../week-08/day-5/index.html")
//     // res.send(data);
// });
//
app.get('/todos/:id', function SingleItem(req, res) {
    con.query("SELECT * FROM todos WHERE id=" + req.params.id,function(err,rows){
        console.log("Data received from Db:\n");
        console.log(rows);
        res.send(rows[0]);
    })
});
//
app.post('/todos', function(req, res) {
    con.query('INSERT INTO todos(text) VALUES("' + req.body.text + '")',function(err,rows){
        con.query("SELECT * FROM todos ORDER BY id DESC LIMIT 1",function(err,rows){
            res.send(rows[0]);
        })
    })
});

app.put('/todos/:id', function(req, res) {
    con.query("UPDATE todos")

    var id = data.findIndex(function(e){
        return e.id === parseInt(req.params.id);
    })
    data[id].completed = req.body.completed;
    data[id].text = req.body.text;

    res.send(data[id]);
});
//
// app.delete('/todos/:id', function(req, res) {
//     var id = data.findIndex(function(e){
//         return e.id === parseInt(req.params.id);
//     })
//     if(id === -1){
//         res.status(404).send()
//     } else {
//         var deleted = data.splice(id, 1);
//         res.send(deleted[0]);
//     }
// });

app.listen(3000);
console.log("server is running");
