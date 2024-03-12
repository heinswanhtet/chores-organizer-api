require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connection')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/404')
const chores = require('./routes/chores')
const app = express()

// middleware

app.use(express.json())

// routes
app.use('/api/v1/chores', chores)
app.use(notFound)

app.use(errorHandlerMiddleware)

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
