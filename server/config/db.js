import mongoose from 'mongoose'
import 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(
      `MongoDb Connected With: ${conn.connection.name}`.magenta.underline
    )
    console.log(`HOST: ${conn.connection.host}`.magenta.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red)

    process.exit(1)
  }
}

export default connectDB
