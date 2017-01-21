var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')

var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jelszo1',
  database: 'secretprojects'
})
connection.connect()

app.use(bodyParser())

app.get('/', function(req, res) {
  res.send('YOLO')
})

app.get('/secretprojects', function(req, res) {
    connection.query('SELECT project_name FROM projects', function(err, projects) {
      if (err) {
        res.status(500).json({error: err.message})
        // res.status(418).send({
        //   "status": "error",
        //   "message": "thank you"
        // });

      }
    //   res.json(projects) //json formatumot kuld vissza
      res.status(200).send(JSON.stringify(projects)) //stringifyolt html formatumot kuld vissza
    })
})

app.post('/new', function(req, res) {
    console.log(req.body);
  var query = {
    sql: 'INSERT INTO projects (project_name) VALUES (?)',
    values: [req.body.project_name]
  }
  connection.query(query, function(err, projects) {
    if (err) {
      res.status(500).json({error: err.message})
    }
    res.json({status: 'ok', id: projects.insertId})
  })
})

app.listen(3000);
