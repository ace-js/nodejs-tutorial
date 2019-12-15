// CRUD
const {initDb, getDb} = require('./db/db')
const Users = require('./db/Users')

const runDb = () => {
   initDb()
   .then(async () => {
       const makeFetchByName = Users.findUserByName(getDb())
       const user = await makeFetchByName('Arnaud')
       console.log(user);
    })
   .catch(error => console.log(error.message))
}

runDb()