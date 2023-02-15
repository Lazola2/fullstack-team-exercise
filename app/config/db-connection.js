const mysql = require('mysql');
require('dotenv').config();

// I put this here, so that it can use it across multiple files
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    MULTI_STATEMENTS: true,
}     
