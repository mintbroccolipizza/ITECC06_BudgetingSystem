const express = require('express');
const router = express.Router();
const myobject = require('./login');




router.get('/', (req, res) => {

    const sqlQuery = `SELECT * FROM expenses WHERE user_id = ${myobject.user_id}`;

    myobject.client.query(sqlQuery, (err, result) => {

        if(err){
            return err;
        }
        console.log('Fetch successfully');
        res.json(result.rows);

    });

})


module.exports = router;