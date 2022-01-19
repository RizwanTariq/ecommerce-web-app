import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

//@description: Get All Products
//@route: /api/products
//@access: PUBLIC

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//@description: Get Specific Products
//@route: /api/products/id
//@access: PUBLIC

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404).json({ message: 'Product not found' })
    } else {
      res.json(product)
    }
  })
)

export default router
