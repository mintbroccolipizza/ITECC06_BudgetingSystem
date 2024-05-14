const express = require("express");
const router = express.Router();
const path = require('path');

  let myobject = {
    router: router, 
    user_id: 1
  };
var establishConnection = require('./database');
// const { resourceUsage } = require("process");
var client = establishConnection();

// const myStuff = { router, user_id: 1 }


router.post('/', (req, res) => {
  const {username, password} = req.body;

  var sqlQuery = `SELECT * FROM users where username = '${username}' AND password = '${password}'`;
  
  client.query(sqlQuery, function(err, result){
    
    if (err) {
      return console.log(`The at blabla ${err}`);
    } else {

      if ((result.rows.length > 0) && (result.rows[0].username == username) && (result.rows[0].password == password)) {
        // User exists
        myobject.user_id = result.rows[0].user_id

        res.sendFile(path.join(__dirname, '../index.html'));
        
      }else{
        res.sendFile(path.join(__dirname, '../login.html'));
      }
    }
  });
});



module.exports = myobject;