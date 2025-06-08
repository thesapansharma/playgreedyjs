// routes/admin.js
import express from 'express'
import  User  from '../models/User.js' // Adjust path to your User model
import Transaction from '../models/Transaction.js'

const router = express.Router()

router.get('/dashboard/user-count', async (req, res) => {
  try {
    const count = await User.countDocuments()
    res.json({ count })
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user count' })
  }
})

router.get('/dashboard/transaction-count', async (req, res) => {
    try {
      const count = await Transaction.countDocuments()
      res.json({ count })
    } catch (err) {
      res.status(500).json({ error: 'Failed to get user count' })
    }
  })
  
  router.get('/dashboard/stats', async (req, res) => {
    try {
      const userCount = await User.countDocuments()
      const transactionCount = await Transaction.countDocuments()
  
      res.json({ userCount, transactionCount })
    } catch (err) {
      console.error('Error fetching dashboard stats:', err)
      res.status(500).json({ error: 'Failed to get dashboard stats' })
    }
  })
  

export default router