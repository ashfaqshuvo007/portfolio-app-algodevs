//Initialize express router
const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        'status': 'Route path to api/clients working',
        'message': 'Welcome to client routes'
    })
})


module.exports = router;