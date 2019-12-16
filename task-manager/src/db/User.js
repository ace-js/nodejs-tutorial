const UserModel = require('../models/User')
module.exports = {
    getAll: async () => {
        return await UserModel.find({})
    },
    create: async (user) => {
        return await UserModel.create(user)
    }
}