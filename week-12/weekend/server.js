var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')
var add = require('./add.js');

var app = express();
app.use(bodyParser())
app.use(express.static('client')); // a client mappabol

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
    console.log("DB connection established");
});


// app.get('/', function(req, res) {
//   res.send('YOLO')
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

app.get('/getall', function(req, res) {
    connection.query('SELECT * FROM botondakiscica', function(err, data) {
      if (err) {
        res.status(500).json({error: err.message})
        // res.status(418).send({
        //   "status": "error",
        //   "message": "thank you"
        // });

      }
    //   res.json(projects) //json formatumot kuld vissza
      res.status(200).send(JSON.stringify(data)) //stringifyolt html formatumot kuld vissza
    })
})


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
    var num1 = parseInt(req.body.numm1);
    var num2 = parseInt(req.body.num2);
    console.log(req.body.numm1);
    console.log(req.body.num2);
    sum = add(num1, num2);
    console.log(sum);
    var query = {
        sql: 'INSERT INTO botondakiscica (number1, number2, summa) VALUES (?,?,?)',
        values: [num1, num2, sum]
    }
    // console.log(query);
    connection.query(query, function(err, rows) {
    if (err) throw err;
  })

//azonban ha csak a sumot akarom visszakuldeni, akkor csak ast stringyfiolom
    // res.status(200).send(JSON.stringify(query.values[0]) + " + " + JSON.stringify(query.values[1]) + " = " + JSON.stringify(query.values[2]));
    res.status(200).send();
})

app.listen(3000);
