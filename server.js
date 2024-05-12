const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


const {router: login} = require('./public/js/login');
const {router: addBudget} = require('./public/js/add-budget');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.use(express.static("public"));


app.use('/login', login);
app.use('/addTransaction', addBudget);




// listen on port 3000
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
