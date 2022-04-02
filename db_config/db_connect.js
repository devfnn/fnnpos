const dotenv = require('dotenv');
const mysql = require('mysql');

// configraration with env. 
dotenv.config();

const mysql_connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME ,
  port: process.env.DB_PORT
});

mysql_connection.connect( async function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = mysql_connection;