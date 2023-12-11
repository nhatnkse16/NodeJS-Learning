require('dotenv').config();
const express = require('express');             //commonjs
// import {express} from "express";             //es modules
const path = require('path');

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')

const app = express();                              //app express
const port = process.env.PORT || 8888;              //port
const hostname = process.env.HOST_NAME;

/* Config template engine */
configViewEngine(app);

/* Config template engine */
app.use('/', webRoutes);


// simple query
connection.query(
    'select * from `Users`;',
    function (err, results, fields) {
        console.log('>>>result>>> ', results); // results contains rows returned by server
        console.log('>>>fields>>> ', fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});