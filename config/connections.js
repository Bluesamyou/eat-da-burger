const mysql = require('mysql')
const env = require('dotenv').config()

const connection = mysql.createConnection({
    host: "	zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "qafi0ft4xpsguo6i"
})

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection