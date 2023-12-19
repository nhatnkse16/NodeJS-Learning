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

/* Config req.body */
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

/* Config template engine */
configViewEngine(app);

/* Config template engine */
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});