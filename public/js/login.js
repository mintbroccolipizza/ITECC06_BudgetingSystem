// var mysql = require('mysql');

// var establishConnection = require('./database');

// var con = establishConnection();

// new try create server

const express = require("express");
const app = express();

app.use(express.static('../'));

app.listen(3000, () => {
  console.log("App listening on port 3000");
})







// const http = require('http')
// const fs = require('fs')
// const port = 8080

// const server = http.createServer(function(req,res) {
//   res.writeHead(200, {'Content-Type' : 'text/html' })
//   fs.readFile("../html/login.html", function(error,data){
//     if(error){
//       res.writeHead(404)
//       res.write('Error: File not found')
//     }else{
//       res.write(data)
//     }
//     res.end()
//   })
// })


// server.listen(port, function(error){
//   if(error){
//     console.log("Something went wrong", error)
//   }else{
//     console.log("Server is listening on port "+ port)
//   }
// })












// const loginForm = document.getElementById("login");

// loginForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
  
//   if (username.trim() === "" || password.trim() === "") {
//     alert("Please enter both username and password.");
//     return;
//   }
  
//   loginForm.reset();
// });
  