const express = require("express");
const router = express.Router();
const path = require('path');

const myobject = require('./login');


const currentDate = new Date();

// Get month, day, and year
const month = currentDate.getMonth() + 1; // January is 0, so we add 1
const day = currentDate.getDate();
const year = currentDate.getFullYear();
// Add leading zeros if needed
const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDay = day < 10 ? `0${day}` : day;
// Construct the formatted date string (mm-dd-yyyy)
const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;


router.use(express.static(path.join(__dirname, '../../public')));

router.get('/budget', (req, res) => {

    // var con = establishConnection();

    const {budgetType, budgetAmount} = req.query;

    const sqlQuery = `INSERT INTO budget (user_id, type, amount, date) VALUES (${myobject.user_id},'${budgetType}','${budgetAmount}','${formattedDate}')`;

    // console.log(sqlQuery);
    
    myobject.client.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Data inserted into database successfully');
        res.sendFile(path.join(__dirname, '../addTransact.html'));
        // console.log(path.join(__dirname, '../index.html'));
    });
    // console.log(myobject.user_id);
    

});

router.get('/expense', (req, res) => {

    const {expenseType, expenseAmount} = req.query;

    const sqlQuery = `INSERT INTO expenses (user_id, type, amount, date) VALUES (${myobject.user_id},'${expenseType}','${expenseAmount}','${formattedDate}')`;

    // console.log(sqlQuery);
    
    myobject.client.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Data inserted into database successfully');
        res.sendFile(path.join(__dirname, '../addTransact.html'));

    });


})



module.exports = {router};