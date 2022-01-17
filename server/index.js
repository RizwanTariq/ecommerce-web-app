const products = require('./data/products')
const express = require('express')
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

app.listen(5000, () => {
  console.log('Server is running on post: 5000')
})