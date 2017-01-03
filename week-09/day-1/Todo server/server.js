"use strict";

var express = require("express");
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json());
app.use(express.static("./public")) //Ezzel hivom meg a todom konyvtarat es mukodtetem a todot

var data = [
    {
        "completed": false,
        "id": 1,
        "text": "Buy milk"
    },
    {
        "completed": false,
        "id": 2,
        "text": "Make dinner"
    },
    {
        "completed": false,
        "id": 15,
        "text": "It works!"
    },
    {
        "completed": false,
        "id": 3,
        "text": "Save the world"
    }
]

var newId = data.length

app.get('/todos', function(req, res) {
    res.send(data);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "../../../week-08/day-5/index.html")
    // res.send(data);
});

app.get('/todos/:id', function SingleItem(req, res) {
    var id = data.findIndex(function(e){            //Array.findIndex() hasznalhato egy adott index megtalalasara
        return e.id === parseInt(req.params.id);
    })
    res.send(data[id]);
});

app.post('/todos', function(req, res) {
    data.push({
        completed: false,
        id: newId += 1,
        text: req.body.text
    })
    res.send(data[data.length - 1]);
});

app.put('/todos/:id', function(req, res) {
    var id = data.findIndex(function(e){
        return e.id === parseInt(req.params.id);
    })
    data[id].completed = req.body.completed;
    data[id].text = req.body.text;

    res.send(data[id]);
});

app.delete('/todos/:id', function(req, res) {
    var id = data.findIndex(function(e){
        return e.id === parseInt(req.params.id);
    })
    if(id === -1){
        res.status(404).send()
    } else {
        var deleted = data.splice(id, 1);
        res.send(deleted[0]);
    }
});

app.listen(3000);
console.log("server is running");
