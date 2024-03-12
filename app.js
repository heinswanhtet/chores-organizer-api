require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connection')
const chores = require('./routes/chores')
const app = express()

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
