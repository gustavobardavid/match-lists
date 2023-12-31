const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER, 
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB
});

module.exports = connection; 