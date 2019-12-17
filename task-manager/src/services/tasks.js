const httpStatus = require('http-status')

const responder = require('../lib/responder')

module.exports = Task => ({
    makeFetchTasks: async () => {
        return await Task.getAll()
    },

    makeFetchTask: async (id, res) => {
        const task = await Task.getTask(id)

        if (!task) {
            return responder.error(res, {
                status: httpStatus.NOT_FOUND
            })
        }

        return task
    },

    makeCreateTask: async (task) => {
        return await Task.createTask(task)
    },

    makeDeleteTask: async (id, res) => {
        const task = await Task.deleteTask(id)

        if (!task) {
            return responder.error(res, {
                status: httpStatus.BAD_REQUEST
            })
        }

        return await Task.getTaskUnCompletedCounter()
    },

    makeUpdateTask: async (id, task, res) => {
        const taskUpdated = await Task.updateTask(id, task)

        if (!taskUpdated) {
            return responder.error(res, {
                status: httpStatus.BAD_REQUEST
            })
        }
        return await Task.getTask(id)
    }
})