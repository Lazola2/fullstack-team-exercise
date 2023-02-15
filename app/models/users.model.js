const sql = require('./db.js');

// user constructor
const User = function(user) {
    this.email = user.email;
    this.password = user.password;
}

// create a User
User.create = (newUser, result) => {
    sql.query('INSERT INTO Users SET ?', newUser, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('Created user: ', {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    })
};

// find User by id
User.findById = (id, result) => {
    sql.query(`SELECT * FROM Users WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if (res.length){
            console.log('found user: ', res[0]);
            result(null, res[0]);
            return;
        }

        // did not find user with the id specified
        result({kind: 'not_found'}, null);
    });
};

module.exports = User;