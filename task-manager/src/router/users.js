const { Router } = require('express')
const validate = require('express-validation')

const schemes = require('./schemes/users')
const usersController = require('../controllers/users')
const handleAsyncFn = require('../lib/handleAsyncFn')
const router = Router()

router.get('/', handleAsyncFn(usersController.getUsers))
router.get('/:id', validate(schemes.getUser), handleAsyncFn(usersController.getUser))
router.post('/', validate(schemes.createUser), handleAsyncFn(usersController.createUser))

module.exports = router
