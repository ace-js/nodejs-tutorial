const { getDb } = require('./db')

module.exports = {
    findUserByName: async (name) => {
        try {
            return await getDb('users').findOne({ name: name })
        } catch (error) {
            throw error
        }
    }
}
