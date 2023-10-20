'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql_basics'
});

dbConn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;
