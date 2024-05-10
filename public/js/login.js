const express = require("express");
const router = express.Router();
const path = require('path');


var establishConnection = require('./database');
var con = establishConnection();


router.post('/', (req, res) => {
  const {username, password} = req.body;

  var sqlQuery = "SELECT username, password FROM users where username = '" + username+ "' AND password = '" + password + "'";
  
  con.query(sqlQuery, function(err, result){
    
    if (err) {
      return err;
    } else {


      if ((result.length > 0) && (result[0].username == username) && (result[0].password == password)) {
        // User exists
        // console.log(req.body);
        module.exports = req.body;
        res.sendFile(path.join(__dirname, '../index.html'));
      }else{
        res.sendFile(path.join(__dirname, '../login.html'));
      }

    }


  });

  
});




module.exports = router;

  