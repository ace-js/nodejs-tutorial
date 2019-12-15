const findUserByName = Database => async (name) => {
    try {
        return  await Database.collection('users').findOne({ name: name })
    } catch (error) {
        throw error
    }
}

module.exports = {
    findUserByName
}
