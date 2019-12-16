const { Router } = require('express')

const rUsers = require('./users')

module.exports = Router()
    .use('/users', rUsers)