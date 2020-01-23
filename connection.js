const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'test'
});

mysqlConnection.connect((err) => {
    if(err){
        console.log('Error', err);
    } else {
        console.log('Database connection success');
    }
});

module.exports = mysqlConnection;