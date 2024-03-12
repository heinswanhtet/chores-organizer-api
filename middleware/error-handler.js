const { CustomAPIError } = require('../errors/custom-errors')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ message: err })
    // return res.status(500).json({ msg: 'Oops! Something went wrong. Please try again later' })
}

module.exports = errorHandlerMiddleware