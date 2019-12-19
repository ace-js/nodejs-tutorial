const TaskModel = require('../models/task')

module.exports = {
    getAll: async () => {
        return await TaskModel.find({})
    },

    getTaskUnCompletedCounter: async () => {
        return await TaskModel.find({ completed: false }).count()
    },

    get: async (id) => {
        return await TaskModel.findById(id)
    },

    create: async (task) => {
        return await TaskModel.create(task)
    },

    update: async (id, task) => {
        return await TaskModel.findByIdAndUpdate(id, task, { new: true, runValidators: true })
    },

    delete: async (id) => {
        return await TaskModel.findByIdAndDelete(id)
    }
}