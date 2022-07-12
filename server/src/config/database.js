const mongoose = require('mongoose')

// MongoDB atlas
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
    console.log(`Database started!`)
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
