// CRUD
const { initDb } = require('./db/db')
const Users = require('./db/Users')

const runDb = async () => {
    try {
        await initDb()
        const user = await Users.findUserByName('Arnaud')
        console.log('Result: ', user)
    } catch (error) {
        console.log(error.message)
    }
}

runDb()
