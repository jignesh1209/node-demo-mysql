const connection = require('../config/db');
const express = require('express');
const router = express.Router();


router.get('/',(req,res) =>{
    connection.query('select * from employee',(err,result) =>{
        res.send(result);
    });
});

module.exports = router;


