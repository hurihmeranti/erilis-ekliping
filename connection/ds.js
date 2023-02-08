// connection menggunakan mysql

const mysql = require('mysql');

let dbPool = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'eficthelter'

}); 

dbPool.connect(function(error){
        if (error) throw error;
        console.log('database connected!!')
});

module.exports = dbPool;