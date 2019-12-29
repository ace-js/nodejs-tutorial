const { model, Schema } = require('mongoose')
const { isEmail } = require('validator')
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')

const crypto = require('../lib/crypto')

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: [18, 'User is not an adult'],
        max: [110, 'User is too old']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        validate: (value) => {
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
        validate: (value) => {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contains "password"')
            }
        }
    }
})

//Hash the plein text password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await crypto.hashingPassword(this.password)
    }
    next()
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({
        data: {
            id: this._id.toString(),
            name: this.name,
            email: this.email
        }
    }, process.env.SECRET_KEY, { expiresIn: '2h' })
    return token
}

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

module.exports = User
