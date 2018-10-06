var mysql = require("../db/databaseconnection.server");
var conn = mysql.mysqlConnection;

module.exports.getAll = (callback) => {
    var sql = "select * from test";
    conn.query(sql, callback);
};