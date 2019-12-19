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
    }
})