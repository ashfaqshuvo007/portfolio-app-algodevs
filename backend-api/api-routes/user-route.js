//Initialize express router
const router = require('express').Router()
//Import user controller
const contactController = require('../controllers/UserController')

router.get('/', (req, res) => {
    res.json({
        'status': 'Route path to api/user working',
        'message': 'Welcome to user routes'
    })
})


module.exports = router;