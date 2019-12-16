const UserModel = require('../models/User')
module.exports = {
    getAll: async () => {
        return await UserModel.find({})
    },

    getUser: async (id) => {
        return await UserModel.findById(id)
    },

    create: async (user) => {
        return await UserModel.create(user)
    }
}