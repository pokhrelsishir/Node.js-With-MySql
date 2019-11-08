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

  // Insert Into
  var sql =
    "INSERT INTO customers (name, email) VALUES ('John Doe', 'johndoe@gmail.com')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Data Inserted Into Table...");
  });
});
