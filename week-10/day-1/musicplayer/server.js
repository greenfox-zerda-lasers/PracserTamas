'use strict';

var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jelszo1',
  database : 'music'
});
connection.connect();

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/playlists', function(req, res) {
	connection.query('SELECT * FROM playlists', function(err, rows, fields) {
		if (err) throw err;
  		res.send(rows);
	});
});

app.post('/playlists', function(req, res) {
	connection.query({
		sql: 'INSERT INTO playlists(playlist) VALUES(?)',
		values: [req.body.playlist] // {playlist: "ez egy lista"}
	},
    function(err, rows, fields) {
		if (err) throw err;
        connection.query({
            sql: 'SELECT playlist FROM playlists'
        },
        function(err, rows, fields) {
    		if (err) throw err;
      		res.send(rows)
       }
   });
}));



);

app.delete('/playlists/:id', function(req, res) {
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

DELETE FROM playlists
WHERE id = '1'

app.listen(3000, function(){
	console.log('SERVER IS UP AND RUNNIN on port: 3000')
});
