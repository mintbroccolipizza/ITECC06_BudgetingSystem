const { Client } = require('pg');


module.exports = function establishConnection() {
  const client = new Client({
    connectionString: "postgres://postgres.vebultcgvexyezefimkn:budgetingsystem.01@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres",
    ssl: {
      rejectUnauthorized: false // Necessary if connecting to Supabase
    }
  });

  client.connect()
    .then(() => console.log("Connected to Supabase!"))
    .catch(err => console.error('Connection error', err.stack));

  return client;
};




// module.exports = function establishConnection(){
//   var con = pg.Client
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "budgetingsystem",
//     port: 5432
//   });
    
//   con.connect(function(err) {
//     if (err){
//       return err;
//     }
//     console.log("Connected!");
//   });
//   return con;
// };


