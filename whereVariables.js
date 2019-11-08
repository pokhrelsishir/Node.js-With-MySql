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

  // Where Variables Practise

  var name_search = "";
  var id_search = 1;

  var sql = "SELECT name FROM customers WHERE name LIKE ? OR id = ?";

  con.query(sql, [name_search, id_search], function(err, result, fields) {
    if (err) throw err;

    console.log(result);
  });
});
