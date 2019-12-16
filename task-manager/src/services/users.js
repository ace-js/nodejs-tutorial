const httpStatus = require('http-status')

const responder = require('../lib/responder')

module.exports = User => ({
    makeFetchUsers: async () => {
        return await User.getAll()
    },

    makeFetchUser: async (id, res) => {
        const user =  await User.getUser(id)

        if (!user) {
            return responder.error(res, {
                status: httpStatus.NOT_FOUND
            })
        }

        return user
    },

    makeCreateUser: async (user) => {
        return await User.create(user)
    }
})