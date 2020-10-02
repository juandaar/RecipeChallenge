require('dotenv').config({ path:__dirname+'/conf/.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const {serverConf}=require("./conf/Configuration")


app.use(cors())
app.use(express.json())

// routes
app.use('/', require('./routes'))

//  server
app.listen(serverConf.port || 3000, () => {
  console.log(`Server is starting on port ${serverConf.port}`)
})
