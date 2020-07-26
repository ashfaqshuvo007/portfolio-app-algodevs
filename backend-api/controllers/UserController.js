//Import User Model
const User = require('../models/User')

//Handles Base Route
// GET /api/users
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            })
        }
        res.json({
            status: 'Success',
            message: 'Users retrieved Successfully!',
            data: users
        })
    })
}

//Handles New User create Route
//POST /api/users/
exports.create = function (req, res) {
    const user = new User()
    user.full_name = req.body.full_name
    user.username = req.body.username
    user.email = req.body.email
    user.password = req.body.password
    user.role = req.body.role


    //Save the user and check for errors
    user.save(function (err) {
        if (err) {
            res.json({
                status: 'Error',
                message: err
            })
        }
        res.json({
            status: 'Success',
            message: 'New User created!',
            data: user

        })
    })
}


//Handling view of a specific user
exports.view = function (req, res) {

    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.json({
                status: 'Error',
                message: err
            })
        }

        res.json({
            status: 'Success',
            message: 'User details loading...',
            data: user
        })
    })

}

//Handles Update of a specific user
exports.update = function (req, res) {

    User.findById(req.params.user_id, function (err, user) {

        if (err) {
            res.json({
                status: 'Error',
                message: err
            })
        }
        user.full_name = req.body.full_name ? req.body.full_name : user.full_name
        user.username = req.body.username ? req.body.username : user.full_name
        user.email = req.body.email
        user.password = req.body.password
        user.role = req.body.role


        //Update the user and check for errors
        user.save(function (err) {
            if (err) {
                res.json({
                    status: 'Error',
                    message: error
                })
            }
            res.json({
                status: 'Success',
                message: 'User Updated',
                data: user
            })
        })
    })
}

//Handles delete a specific user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    })
} 