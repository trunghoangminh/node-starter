var mysql = require('mysql');

// Some info for connecting database
const HOST = 'localhost';
const DATABASE = 'test';
const PORT = '3306';
const USER = 'user';
const PASSWORD = 'pass';

var mysqlConnection = mysql.createConnection({
    host: HOST,
    database: DATABASE,
    port: PORT,
    user: USER,
    password: PASSWORD,
});

module.exports.mysqlConnection = mysqlConnection;