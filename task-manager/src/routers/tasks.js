const { Router } = require('express')

const tasksController = require('../controllers/tasks')
const handleAsyncFn = require('../lib/handleAsyncFn')
const router = Router()

router.get('/', handleAsyncFn(tasksController.getTasks))
router.get('/:id', handleAsyncFn(tasksController.getTask))
router.post('/', handleAsyncFn(tasksController.createTask))
router.delete('/:id', handleAsyncFn(tasksController.deleteTask))
router.patch('/:id', handleAsyncFn(tasksController.updateTask))

module.exports = router
