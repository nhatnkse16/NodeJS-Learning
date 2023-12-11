const express = require('express');
const router = express.Router();

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

const { getHomePage, samplePage } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/sample', samplePage);

module.exports = router;
