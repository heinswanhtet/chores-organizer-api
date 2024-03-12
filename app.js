const express = require('express')
const app = express()
require('dotenv').config()
const chores = require('./routes/chores')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/chores', chores)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})