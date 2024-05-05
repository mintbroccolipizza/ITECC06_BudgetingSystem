const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");



var establishConnection = require('./database');
var con = establishConnection();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/login', (req, res) => {
  const {username, password} = req.body;

  var sqlQuery = "SELECT first_name FROM users where first_name = " + username;
  
  con.query(sql, function(err, result){
    if(err){
      throw err;
    }else{
      console.log(result.first_name);
    }
  })
});



const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  return LogIn();
  
  loginForm.reset();
});
  