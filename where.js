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

  // Where Clause

  //   var sql = "SELECT name FROM customers WHERE id <= 4";

  var sql = "SELECT name FROM customers WHERE name LIKE 't%' OR id = 1";

  con.query(sql, function(err, result, fields) {
    if (err) throw err;

    console.log(result);
  });
});
