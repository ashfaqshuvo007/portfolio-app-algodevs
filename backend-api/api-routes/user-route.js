//Initialize express router
const router = require('express').Router()
//Import user controller
const userController = require('../controllers/UserController')

//Route to api/users/
router.route('/')
    .get(userController.index)
    .post(userController.create)


//Route to api/users/;user_id
router.route('/:user_id')
    .get(userController.view)
    .put(userController.update)
    .patch(userController.update)
    .delete(userController.delete)

//Export API routes
module.exports = router;