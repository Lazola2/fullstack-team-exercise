const User = require('../models/users.model.js');

// MIGHT NEED BODY-PARSER 

// create and save a new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    // create a user
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    // save User in the database
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: 
                    err.message || 'Some error occurred!'
            });
        }
        else res.send(data);
    });
}

// find a single user with an id
exports.findOne = (req, res) => {
    Tutorial.findById(req.params.id, (err, data) => {
        if (err){
            if (err.kind === 'not_found'){
                res.status(404).send({
                    message: `Did not find a User with id ${req.params.id}.`
                });
            }
            else {
                res.status(500).send({
                    message: `Error retrieving User with id ${req.params.id}.`
                });
            };
        } else res.send(data);
    });
}

