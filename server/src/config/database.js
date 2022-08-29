const mongoose = require('mongoose')

// MongoDB atlas
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, { dbName: 'PRATICAS' })
    console.log(`Conectado ao MongoDB!`)
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
