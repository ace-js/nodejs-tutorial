const Task = require('../models/task')

module.exports = {
    getAll: async () => {
        return await Task.find({})
    },

    getTaskUnCompletedCounter: async () => {
        return await Task.find({completed: false}).count()
    },

    getTask: async (id) => {
        return await Task.findById(id)
    },

    createTask: async (task) => {
        return await Task.create(task)
    },

    deleteTask: async (id) => {
        return await Task.findByIdAndDelete(id)
    }
}