const { Router } = require('express')

const rUsers = require('./users')
const rTasks = require('./tasks')

module.exports = Router()
    .use('/users', rUsers)
    .use('/tasks', rTasks)