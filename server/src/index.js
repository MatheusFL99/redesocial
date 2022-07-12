const express = require('express')
const dotenv = require('dotenv')
const database = require('./config/database')
const routes = require('./routes/index.routes')
const app = express()

app.use(function (req, res, next) {
  //CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
  )
  next()
})

app.use(express.json())

dotenv.config()
database()

app.use('/api', routes)

app.listen(3001, () => {
  console.log('Server started - http://localhost:3001')
})
