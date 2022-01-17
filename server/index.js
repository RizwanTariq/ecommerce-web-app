import 'colors'
import 'dotenv/config' //Same as dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import products from './data/products.js'

//Connect with DATABASE
connectDB()

const app = express()
app.get('/', (req, res) => {
  res.send('Api is running..')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  if (!product) res.send('404 product not found')
  res.json(product)
})

const PORT = process.env.PORT || 5000
const ENVIORNMENT = process.env.NODE_ENV
app.listen(PORT, () => {
  console.log(
    `Server running in ${ENVIORNMENT} enviornment on port: ${PORT}`.blue
  )
})
