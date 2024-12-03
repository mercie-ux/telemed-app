require('dotenv').config();
const mysql= require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // mysql host
    user: 'root', // mysql username
    password: 'password', //mysql password
    database: 'telemedicine', // database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
