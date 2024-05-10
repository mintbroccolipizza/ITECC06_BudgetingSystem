const express = require("express");
const router = express.Router()
const path = require('path');

let username = null;
let password = null;

var establishConnection = require('./database');
var con = establishConnection();


router.post('/', (req, res) => {
  const {username: reqUserName, password: reqPassword} = req.body;

  var sqlQuery = "SELECT username, password FROM users where username = '" + reqUserName+ "' AND password = '" + reqPassword + "'";
  
  con.query(sqlQuery, function(err, result){
    
    if (err) {
      
      return err;
    } else {

      if(result.length > 0){

        if ((result[0].username == reqUserName) && (result[0].password == reqPassword)) {
          // User exists
          // console.log(req.body);
          username = reqUserName;
          password = reqPassword;
          res.sendFile(path.join(__dirname, '../index.html'));
          // console.log(__dirname + '../index.html');
        } 
        // else {
        //   // User does not exist
        //   // res.send('User does not exist');
        //   // res.send('<script>alert("incorrect credentials");</script>');
          
        // }

      }else{
        res.sendFile(path.join(__dirname, '../login.html'));
      }

      

    }


  });
});

module.exports = router;

  