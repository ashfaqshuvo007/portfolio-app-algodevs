//Initialize express router
const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        'status': 'Route path to api/portfolios working',
        'message': 'Welcome to user routes'
    })
})


module.exports = router;