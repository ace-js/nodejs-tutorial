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

    update: async (id, updateObj) => {
        const user = await UserModel.findById(id)

        Object.keys(updateObj).forEach(key => user[key] = updateObj[key])

        return await user.save()
    },

    delete: async (id) => {
        return await UserModel.findByIdAndDelete(id)
    },

    findByEmail: async (email) => {
        return await UserModel.findOne({ email })
    }
}