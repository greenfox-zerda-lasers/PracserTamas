'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var validator = require('./validator');
var app = express();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'zerda-exam'
});

connection.connect();

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/exam', function (req, res) {
  var feedback = req.body.feedback;

  var scale = parseInt(req.body.scale);
  var email = req.body.email;
  if(validator(email, scale, feedback)) {
    var responseFromTheServer = {
      "status": "ok",
      "projects": [
        "secret project 1",
        "secret project 2"
      ]
    };
    var projectsFromTheDatabase = [];
    connection.query('SELECT project_name FROM projects;', function(err, rows) {
      if (err) throw err;
      for(var i=0; i < rows.length; i++) {
        projectsFromTheDatabase.push(rows[i].project_name);
      }
      responseFromTheServer.projects = projectsFromTheDatabase;
      res.status(200).send(JSON.stringify(responseFromTheServer));
    });

  } else {
    res.status(418).send({
      "status": "error",
      "message": "thank you"
    });
  }
})

app.listen(3000);
