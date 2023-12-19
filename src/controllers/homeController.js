const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
}

const samplePage = (req, res) => {
    res.render('sample.ejs');
}

const addUser = (req, res) => {
    console.log('>>> Req.body: ', req.body);
    console.log('>>> Req.body.Email: ', req.body.email);
    console.log('>>> Req.body.Fullname: ', req.body.fullname);
    console.log('>>> Req.body.City: ', req.body.city);

    return res.render('home.ejs');
}

module.exports = {
    getHomePage,
    samplePage,
    addUser
}