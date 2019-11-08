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

  // Order By

  var sql = "SELECT * FROM customers ORDER BY id DESC";

  con.query(sql, function(err, result, fields) {
    if (err) throw err;

    console.log(result);
  });
});
