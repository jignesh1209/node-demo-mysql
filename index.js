require('dotenv').config();
const express = require('express');
const employee = require('./routes/employee');
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.use('/api/employee',employee);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});

