var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')
var add = require('./add.js');

var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jelszo1',
  database: 'numbers'
});

// connection.connect()

connection.connect(function(err){
  if(err){
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
});

app.use(bodyParser())
app.use(express.static('client')); // a client mappabol

app.get('/', function(req, res) {
  res.send('YOLO')
})

// app.get('/secretprojects', function(req, res) {
//     connection.query('SELECT project_name FROM projects', function(err, projects) {
//       if (err) {
//         res.status(500).json({error: err.message})
//         // res.status(418).send({
//         //   "status": "error",
//         //   "message": "thank you"
//         // });
//
//       }
//     //   res.json(projects) //json formatumot kuld vissza
//       res.status(200).send(JSON.stringify(projects)) //stringifyolt html formatumot kuld vissza
//     })
// })


// app.get('/secretprojects', function(req, res) {
//     connection.query('SELECT project_name FROM projects', function(err, projects) {
//       if (err) {
//         res.status(500).json({error: err.message})
//         // res.status(418).send({
//         //   "status": "error",
//         //   "message": "thank you"
//         // });
//
//       }
//     //   res.json(projects) //json formatumot kuld vissza
//       res.status(200).send(JSON.stringify(projects)) //stringifyolt html formatumot kuld vissza
//     })
// })

// app.post('/new', function(req, res) {
//     console.log(req.body);
//   var query = {
//     sql: 'INSERT INTO projects (project_name) VALUES (?)',
//     values: [req.body.project_name]
//   }
//   connection.query(query, function(err, projects) {
//     if (err) {
//       res.status(500).json({error: err.message})
//     }
//     res.json({status: 'ok', id: projects.insertId})
//   })
// })

app.post('/add', function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    console.log(req.body.num1);
    console.log(req.body.num2);
    sum = add(num1, num2);
    console.log(sum);
    var query = {
        sql: 'INSERT INTO add (number1, number2) VALUES (?,?)',
        values: [num1, num2]
    }
// 'INSERT INTO add (number1, number2) VALUES (?,?)', [num1, num2]
    connection.query(query, function(err) {
    if (err) {
        // res.status(500).json({error: err.message})
        console.log("Error connecting to db");
    }
  })
  res.status(200).send(JSON.stringify(sum));
})

app.listen(3000);
