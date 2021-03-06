// Set up MySQL connection.
var mysql = require("mysql");

require("dotenv").config();

if (process.env.JAWSDB_URL) {
  // JawsDB
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // local db
  connection = mysql.createConnection(process.env.DB_CONNECTION_STRING);
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;