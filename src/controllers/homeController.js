const getHomePage = (req, res) => {
    //process data
    //call model
    res.send('Hello World Index');
}

const samplePage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage,
    samplePage
}