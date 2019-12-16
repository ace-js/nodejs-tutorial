module.exports = User => ({
    makeFetchUsers: async () => {
        return await User.getAll()
    },
    makeCreateUser: async (user) => {
        return await User.create(user)
    }
})