const { Router } = require('express')

const usersController = require('../controllers/users')
const handleAsyncFn = require('../lib/handleAsyncFn')
const router = Router()

router.get('/', handleAsyncFn(usersController.getUsers))
router.post('/', handleAsyncFn(usersController.createUser))

module.exports = router
