const mysql = require("mysql2");


const pool = mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"nfc_database",
    connectionLimit:1000
})

pool.getConnection((err,connection)=>{
    if(err) throw err;
    console.log("Connected to database successfully..")
    connection.release();
})


module.exports = pool;