const httpStatus = require('http-status')

const responder = require('../lib/responder')
const validators = require('../lib/customValidators')
const Task = require('../db/Task')
const tasksServices = require('../services/tasks')(Task)

const getTasks = async (req, res) => {
    const tasks = await tasksServices.makeFetchTasks()

    responder.success(res, {
        status: httpStatus.OK,
        payload: { tasks }
    })
}

const getTask = async (req, res) => {
    const task = await tasksServices.makeFetchTask(req.params.id)

    if (!task) {
        return responder.error(res, {
            status: httpStatus.NOT_FOUND
        })
    }

    responder.success(res, {
        status: httpStatus.OK,
        payload: { task }
    })
}

const createTask = async (req, res) => {
    const task = await tasksServices.makeCreateTask(req.body)

    responder.success(res, {
        status: httpStatus.CREATED,
        payload: { task }
    })
}

const deleteTask = async (req, res) => {
    const task = await tasksServices.makeDeleteTask(req.params.id)

    if (!task) {
        return responder.error(res, {
            status: httpStatus.NOT_FOUND
        })
    }
     
   const counter = await tasksServices.makeFetchUncompletedTaskCounter()

    responder.success(res, {
        status: httpStatus.OK,
        payload: { counter }
    })
}

const updateTask = async (req, res) => {
    validators.updateValidation(['description', 'completed'], req.body, res)

    const task = await tasksServices.makeUpdateTask(req.params.id, req.body)

    if (!task) {
        return responder.error(res, {
            status: httpStatus.NOT_FOUND
        })
    }

    responder.success(res, {
        status: httpStatus.OK,
        payload: { task }
    })
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}