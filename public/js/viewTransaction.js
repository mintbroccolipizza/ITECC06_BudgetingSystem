const express = require('express');
const router = express.Router();
const myobject = require('./login');

const establishConnection = require('./database');
const con = establishConnection();

const userInformation = null;

const sqlQuery = `SELECT * FROM budget WHERE username = '${myobject.user_id}'`;

con.query(sqlQuery, (err,result) => {
    if (err) {
        console.error('Error executing MySQL query: ', err);
        res.status(500).send('Internal Server Error');
        return;
    }

    userInformation = result;

})

console.log(userInformation);

module.exports = router;