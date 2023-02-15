module.exports = app => {
    const user = require('../controllers/users.controller.js');
    var router = require('express').Router();

    // create a new user
    router.post('/', user.create);

    // retrieve a single user with id
    router.get('/:id', user.findOne);

    app.use('/users', router);
};