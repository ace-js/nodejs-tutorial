const { model, Schema } = require('mongoose')

module.exports = model('Task', Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}))