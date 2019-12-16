const httpStatus = require('http-status')

const responder = require('../lib/responder')
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
    const task = await tasksServices.makeFetchTask(req.params.id, res)

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
    const count = await tasksServices.makeDeleteTask(req.params.id, res)

    responder.success(res, {
        status: httpStatus.OK,
        payload: { count }
    })
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask
}