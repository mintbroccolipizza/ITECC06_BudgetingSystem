const express = require("express");
const router = express.Router();

const {user_id} = require('./login');



var establishConnection = require('./database');



router.get('/', (req, res) => {

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


    var con = establishConnection();

    const {budgetType, budgetAmount} = req.query;

    const sqlQuery = `INSERT INTO budget (user_id, type, amount, date) VALUES (${user_id},'${budgetType}','${budgetAmount}','${formattedDate}')`;

    // console.log(sqlQuery);
    
    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Data inserted into database successfully');

    });

    
    
    
});



module.exports = router;