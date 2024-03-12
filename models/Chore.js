const mongoose = require('mongoose')

const ChoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide title'],
        trim: true,
        maxlength: [100, 'title cannot be more than 100 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Chore', ChoreSchema)