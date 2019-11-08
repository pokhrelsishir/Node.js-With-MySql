var mysql = require("mysql");

// Create A Connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

// Connect To MySql
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected To The Database !!!");

  con.query("CREATE DATABASE nodedb", function(err, result) {
    if (err) throw err;
    console.log("Database Created !!!");
  });
});
