const express = require('express')
const dotenv = require('dotenv')
const apitRoutes = require('./api-routes/index')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//set Path for dotenv config
dotenv.config({ path: './config/config.env' })

//set app
const app = express()

//Configure bodyParser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

//DB connection
const config = require('./config/db')
mongoose.connect(config.dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

//Connection check
if (!db) {
    console.log("Error in connecting DB")
} else {
    console.log("Db connection established")
}





//defining api Routes
app.use('/api', apitRoutes)

//Initialize default port
const port = process.env.PORT || 5000

//Start App
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on  ${port}`))

