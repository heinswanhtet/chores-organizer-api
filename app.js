const express = require('express')
const app = express()
require('dotenv').config()
const chores = require('./routes/chores')
const connectDB = require('./db/connection')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/chores', chores)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
