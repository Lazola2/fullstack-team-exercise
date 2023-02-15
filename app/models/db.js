const mysql = require('mysql');
const dbConfig = require('../config/db-connection.js');

// create a connection to the database
const connection = mysql.createConnection({
    HOST: dbConfig.HOST,
    USER: dbConfig.USER,
    PASSWORD: dbConfig.PASSWORD,
    DB: dbConfig.DB
});

connection.connect( error => {
    if (error) throw error;
    console.log('Successfully connected to the database!');
})

module.exports = connection;