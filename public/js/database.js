var mysql = require('mysql');


module.exports = function establishConnection(){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "budgetingsystem"
    });
      
      con.connect(function(err) {
        if (err){
          return err;
        }
        console.log("Connected!");
    });

      return con;
};


