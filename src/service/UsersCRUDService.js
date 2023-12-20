const connection = require('../config/database');

const getAllUsers = async () => {
    // connection.query(
    //     'select * from `Users`',
    //     function (err, results, fields) {
    //         console.log('>>> Result: ', results);
    //     }
    // );

    let [results, fields] = await connection.query('select * from `Users`');
    return results;
}

const addNewUser = async (email, fullName, address) => {

    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    //     [email, fullName, address],
    //     function (err, results) {
    //         console.log(results);

    //         return res.render('user.ejs');
    //     });

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, fullName, address]
    );

    console.log('>>> Check result: ', results);

    return results;

}

const getUserByID = async (idUser) => {

    let [results, fields] = await connection.query('select * from `Users` where id = ?', [idUser]);

    let user = results && results.length > 0 ? results[0] : {};

    console.log('>>> user: ', user);

    return user;
}

const editUserByID = async (email, fullName, address, idUser) => {

    let [results, fields] = await connection.query(
        `UPDATE Users  
        SET email = ? , name = ?, city = ?
        WHERE id = ?;`,
        [email, fullName, address, idUser]
    );

    console.log('>>> Check result: ', results);

    return results;
}

module.exports = {
    getAllUsers,
    addNewUser,
    getUserByID,
    editUserByID
}