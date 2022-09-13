const express = require('express')
const dotenv = require('dotenv')
const database = require('./config/database')
const routes = require('./routes/index.routes')
const cors = require('cors')

const app = express()

dotenv.config()
database()
app.use(express.json())

app.use(function (req, res, next) {
  //CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
  )
  next()
})
app.unsubscribe(cors({ credentials: true, origin: 'http://localhost:3000' }))

// routes
app.use('/api', routes)

app.listen(3001, () => {
  console.log('Server started - http://localhost:3001')
})
