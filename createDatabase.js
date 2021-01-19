const mysql = require('mysql');
const data = require('./databaseData');//object that contains all database data
//to modify database data, moddify databaseData.js module

console.log(data);

var con = mysql.createConnection({
   host: data.host,
   user: data.user,
   password: data.password
 });
 
// create database
con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   con.query("CREATE DATABASE " + data.database, function (err, result) {
      if (err) throw err;
      console.log("Database created " + data.database);
      con.end();
      addTable();
   });   
});

function addTable()
{
   let newCon = mysql.createConnection({
      host: data.host,
      user: data.user,
      password: data.password,
      database : data.database
    });
   
   newCon.connect(function(err) {
   if (err) throw err;
   var sql = "CREATE TABLE chat (id INT(15) UNSIGNED AUTO_INCREMENT PRIMARY KEY, message VARCHAR(255), sender VARCHAR(50))";
   newCon.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
      console.log("Creazione del database eseguita con successo");
   });
   });
   
}


 


