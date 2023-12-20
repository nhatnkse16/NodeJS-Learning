const express = require('express');
const router = express.Router();
const { getHomePage, samplePage, addUser, getUser, getEditUser, submitEditUser, deleteUser } = require('../controllers/homeController');

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

/* router.Method('/route',handler) */

router.get('/', getHomePage);

router.get('/sample', samplePage);

router.get('/user', getUser);

router.post('/addUser', addUser);

router.get('/edit/:id', getEditUser);

router.post('/submitEdit/:id', submitEditUser);

router.get('/delete', deleteUser);

module.exports = router;
