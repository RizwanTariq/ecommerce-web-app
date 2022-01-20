import 'colors'
import 'dotenv/config' //Same as dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import router from './routes/index.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

//Connect with DATABASE
connectDB()

const app = express()

//Middlewares
app.use('/', router)

//error middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const ENVIORNMENT = process.env.NODE_ENV
app.listen(PORT, () => {
  console.log(
    `Server running in ${ENVIORNMENT} enviornment on port: ${PORT}`.blue
  )
})
