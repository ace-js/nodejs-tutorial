const UserModel = require('../models/user')
module.exports = {
    getAll: async () => {
        return await UserModel.find({})
    },

    get: async (id) => {
        return await UserModel.findById(id)
    },

    create: async (user) => {
        return await UserModel.create(user)
    },

    update: async (id, user) => {
        return await UserModel.findByIdAndUpdate(id, user, { new: true, runValidators: true })
    },

    delete: async (id) => {
        return await UserModel.findByIdAndDelete(id)
    },
}