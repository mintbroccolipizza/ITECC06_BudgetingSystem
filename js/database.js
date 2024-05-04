var mysql = require('mysql');


module.exports = function establishConnection(){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

      return con;
};


