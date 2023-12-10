const express = require('express');             //commonjs
// import {express} from "express";             //es modules
const path = require('path');
require('dotenv').config()

const app = express();                              //app express
const port = process.env.PORT || 8888;              //port
const hostname = process.env.HOST_NAME;

/* Config template engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Config static files */
app.use(express.static(path.join(__dirname, 'public')))

/*************************
 * Khai báo route
 *************************
 *
 * app.METHOD(PATH, HANDLER)
 * 
 * app ở đây là ứng dụng express
 * METHOD(HTTP request method): Get / Post
 * PATH: đường link(route) trên server
 * HANDLER: function được xử lý khi route được match
 */

app.get('/', (req, res) => {
    res.send('Hello World Index')
})

app.get('/ejs', (req, res) => {
    res.render('sample.ejs');
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})