const { Router } = require('express')

const usersController = require('../controllers/users')
const handleAsyncFn = require('../lib/handleAsyncFn')
const router = Router()

router.get('/', handleAsyncFn(usersController.getUsers))
router.get('/:id', handleAsyncFn(usersController.getUser))
router.post('/', handleAsyncFn(usersController.getUser))

module.exports = router
