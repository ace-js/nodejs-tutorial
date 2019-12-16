const { model, Schema } = require('mongoose')
const { isEmail } = require('validator')

module.exports = model('User', new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: [18, 'User is not an adult']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) {
            if (!isEmail(value)) {
                throw new Error('Invalid email address')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contains "password"')
            }
        }
    }
}))
