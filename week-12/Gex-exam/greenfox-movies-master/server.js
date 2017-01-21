var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')

var app = express()
var PORT = process.env.PORT || 3000
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express-mysql'
})
connection.connect()

// super duper logger middleware
app.use(function(req, res, next) {
  console.log('[%s] %s', req.method, req.url)
  next()
})

// body parser middleware
app.use(bodyParser())

// GET / endpoint
app.get('/', function(req, res) {
  res.send('YOLO')
})

// GET /movies endpoint
app.get('/movies', function(req, res) {
  connection.query('SELECT * FROM movies', function(err, movies) {
    if (err) {
      res.status(500).json({error: err.message})
    }
    res.json(movies)
  })
})

// POST /movies endpoint
app.post('/movies', function(req, res) {
  var query = {
    sql: 'INSERT INTO movies (title) VALUES (?)',
    values: [req.body.title]
  }
  connection.query(query, function(err, movies) {
    if (err) {
      res.status(500).json({error: err.message})
    }
    res.json({status: 'ok', id: movies.insertId})
  })
})

// start server
app.listen(PORT, function() {
  console.log('app is runnning on port ' + PORT)
})
