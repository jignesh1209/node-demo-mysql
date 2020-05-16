require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.on('connect',(err)=>{
    if(err) console.log('Getting error while connecting the DB');

    console.log('Connected with DB');
});

module.exports = connection;