var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jelszo1",
  database: "bookstore", //milyen adatbazisbol dolgozunk
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

con.query("SELECT * FROM author;",function(err,rows){
  console.log("Data received from Db:\n");
  console.log(rows);
});

con.end();
