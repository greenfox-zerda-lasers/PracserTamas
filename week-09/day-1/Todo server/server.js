"use strict";

var express = require("express");
var app = express();

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
        "id": 3,
        "text": "Save the world"
    }
]

app.get('/todos', function(req, res) {
    res.send(data);
});

app.get('/todos/:id', function SingleItem(req, res) {
    console.log(req.params.id);
    res.send('ok');
});

// app.post('/todos', function(req, res) {
//     res.send(data.id);
// });

app.listen(3000);
console.log("server is running");
