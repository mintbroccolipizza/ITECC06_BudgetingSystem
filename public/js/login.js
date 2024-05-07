const express = require("express");
const router = express.Router()
const path = require('path');


var establishConnection = require('./database');
var con = establishConnection();


router.post('/', (req, res) => {
  const {username, password} = req.body;

  var sqlQuery = "SELECT first_name FROM users where first_name = '" + username+ "'";
  
  con.query(sqlQuery, function(err, result){
    
    if (err) {
      return err;
    } else {
      if (result.length > 0) {
        // User exists

        res.sendFile(path.join(__dirname, '../index.html'));
        // console.log(__dirname + '../index.html');
      } else {
        // User does not exist
        // res.send('User does not exist');
        res.send('<script>alert("incorrect credentials");</script>');
        res.sendFile(path.join(__dirname, '../login.html'));
      }

    }


  });
});

module.exports = router


// const loginForm = document.getElementById("login");

// loginForm.addEventListener("submit", function(event) {
//   event.preventDefault();
  
//   return LogIn();
  
//   loginForm.reset();
// });
  