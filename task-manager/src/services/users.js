const crypto = require('../lib/crypto')

module.exports = User => ({
    makeFetchUsers: async () => {
        return await User.getAll()
    },

    makeFetchUser: async (id) => {
        return await User.get(id)
    },

    makeCreateUser: async (user) => {
        return await User.create(user)
    },

    makeUpdateUser: async (id, user) => {
        return await User.update(id, user)
    },

    makeDeleteUser: async (id) => {
        return await User.delete(id)
    },

    makeAuthentication: async (email, password) => {
        try {
            const user = await User.findByEmail(email)
            if (!user) throw new Error('Unable to login')

            const isMatch = await crypto.isPasswordMatch(password, user.password)
            if (!isMatch) throw new Error('Unable to login')

            return user
        } catch (error) {
            error.status = 400
            throw error
        }
    }
})