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

  // Update Record

  var sql = "UPDATE customers SET name = 'CCR PKRL' WHERE id = 1";

  // "SELECT * FROM customers";

  con.query(sql, function(err, result, fields) {
    if (err) throw err;

    console.log(result);
  });
});
