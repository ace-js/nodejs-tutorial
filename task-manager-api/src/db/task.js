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

    update: async (id, updateObj) => {
        const task = await TaskModel.findById(id)

        Object.keys(updateObj).forEach(key => task[key] = updateObj[key])

        return await task.save()
    },

    delete: async (id) => {
        return await TaskModel.findByIdAndDelete(id)
    }
}