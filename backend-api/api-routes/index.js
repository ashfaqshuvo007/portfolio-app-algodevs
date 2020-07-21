//Initialize express router
const router = require('express').Router()

//User Routes
//For /api/users/
const userRoutes = require('./user-route')

//Client Routes
//For /api/clients/
const clientRoutes = require('./client-route')

//Portfolio Routes
//For /api/portfolios/
const portfolioRoutes = require('./portfolio-route')

//Project Routes
//For /api/projects/
const projectRoutes = require('./project-route')







//default api route/response
router.get('/', (req, res) => {
    res.json({
        status: 'Api is working',
        message: 'Welcome!'
    })
})
    .use('/users', userRoutes)
    .use('/clients', clientRoutes)
    .use('/projects', projectRoutes)
    .use('/portfolios', portfolioRoutes)

//Export Routes
module.exports = router