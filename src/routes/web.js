const express = require('express');
const router = express.Router();
const { getHomePage, samplePage, addUser } = require('../controllers/homeController');

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
router.post('/addUser', addUser);

module.exports = router;
