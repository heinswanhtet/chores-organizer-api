const connection = require('mongoose')

const connectDB = (url) => {
    return connection.connect(url)
}

module.exports = connectDB