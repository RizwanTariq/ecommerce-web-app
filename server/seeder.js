import mongoose from 'mongoose'
import 'dotenv/config' //Same as dotenv.config()
import 'colors'
import connectDB from './config/db.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import products from './data/products.js'

dotEnv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers.find((user) => user.isAdmin === true)
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }))

    await Product.insertMany(sampleProducts)
    console.log('Data Inserted'.green)
    process.exit(0)
  } catch (err) {
    console.log(`${err.message}`.red)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed'.green)
    process.exit(0)
  } catch (err) {
    console.log(`${err.message}`.red)
    process.exit(1)
  }
}

if (process.argv[2] === '-D') {
  destroyData()
} else {
  importData()
}
