import express from 'express'
import productRoutes from './productRoutes.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Api is running..')
})

router.use('/api/products', productRoutes)

export default router
