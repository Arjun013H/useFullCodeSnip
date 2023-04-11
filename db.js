const mysql = require('mysql2')

const  db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database:'mysql'
})

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("mysql connect")
})

module.exports =db

