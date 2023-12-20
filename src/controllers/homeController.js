const connection = require('../config/database');
const { getAllUsers, addNewUser, getUserByID, editUserByID } = require('../service/UsersCRUDService')



const getHomePage = (req, res) => {
    return res.render('home.ejs');
}



const samplePage = (req, res) => {
    res.render('sample.ejs');
}



const addUser = async (req, res) => {
    let email = req.body.email;
    let fullName = req.body.fullname;
    let address = req.body.city;

    console.log('>>> Req.body: ', req.body);

    let user = await addNewUser(email, fullName, address);

    return res.redirect('user');
}



const getUser = async (req, res) => {
    let results = await getAllUsers();

    // console.log('>>> Result: ', results);

    return res.render('user', { listUsers: results });
}



const getEditUser = async (req, res) => {

    console.log('>>> Req.param: ', req.params);

    const idUser = req.params.id;
    console.log('>>> idUser: ', idUser);

    let user = await getUserByID(idUser);
    console.log('>>> getUserByID: ', user);

    return res.render('editUser.ejs', { editUsers: user });
}



const submitEditUser = async (req, res) => {
    const idUser = req.params.id;
    const email = req.body.email;
    const fullName = req.body.fullname;
    const address = req.body.city;

    console.log('>>> Req.body: ', req.body);

    let editUser = await editUserByID(email, fullName, address, idUser);
    console.log('>>> editUser Inf', editUser);

    return res.redirect('/user');
}



const deleteUser = (req, res) => {

    return res.redirect('user');
}



module.exports = {
    getHomePage,
    samplePage,
    addUser,
    getUser,
    getEditUser,
    submitEditUser,
    deleteUser
}