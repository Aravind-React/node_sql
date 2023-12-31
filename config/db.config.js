'use strict';
require('dotenv').config();
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

dbConn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;
