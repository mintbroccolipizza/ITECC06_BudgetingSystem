const express = require("express");
const router = express.Router()
const path = require('path');

const {username, password} = require('./login');


router.get('/', (req, res) => {

    console.log();
    console.log(password);

});

module.exports = router;