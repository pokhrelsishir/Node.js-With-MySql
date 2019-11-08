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

  // Insert Many Records at Once
  var sql = "INSERT INTO customers (name, email) VALUES ?";

  var values = [
    ["Tim", "tim@gmail.com"],
    ["Tina", "tina@hotmail.com"],
    ["Niko", "niko@yahoo.com"]
  ];

  con.query(sql, [values], function(err, result) {
    if (err) throw err;
    console.log("Records Inserted: " + result.affectedRows);
  });
});
