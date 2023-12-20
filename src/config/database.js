require('dotenv').config();

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_port = process.env.DB_PORT;
const db_password = process.env.DB_PASSWORD;
const db_database = process.env.DB_DATABASE;

/* get the client */
const mysql = require('mysql2/promise');

/* create the connection to database */
// const connection = mysql.createConnection({
//     host: db_host,
//     user: db_user,
//     port: db_port,
//     password: db_password,
//     database: db_database
// });

/* create the connection pool to database */
const connection = mysql.createPool({
    host: db_host,
    user: db_user,
    port: db_port,
    password: db_password,
    database: db_database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

// Kiểm tra kết nối
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database: ', err);
//         return;
//     }
//     console.log('Connected to database');
// });

module.exports = connection;
