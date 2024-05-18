const express = require("express");
const router = express.Router();
const path = require('path');

var establishConnection = require('./database');
var client = establishConnection();

let myobject = {
  router: router, 
  user_id: 1,
  client
};

// const myStuff = { router, user_id: 1 }

router.get('/', (req, res) => {

  const sqlQuery = `SELECT first_name FROM users WHERE user_id = ${myobject.user_id}`;

  myobject.client.query(sqlQuery, (err, result) => {

    if(err){
      return err;
    }

    res.json(result.rows);


  })


})


router.post('/', (req, res) => {
  const {username, password} = req.body;

  var sqlQuery = `SELECT * FROM users where username = '${username}' AND password = '${password}'`;
  
  client.query(sqlQuery, function(err, result){
    
    if (err) {
      return console.log(`The at blabla ${err}`);
    } else {

      if ((result.rows.length > 0) && (result.rows[0].username == username) && (result.rows[0].password == password)) {
        // User exists
        myobject.user_id = result.rows[0].user_id;
        console.log(myobject.user_id);
        res.sendFile(path.join(__dirname, '../index.html'));
        
      }else{
        res.sendFile(path.join(__dirname, '../login.html'));
      }
    }
  });
});



module.exports = myobject;