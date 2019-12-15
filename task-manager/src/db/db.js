const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

let _db = null

const initDb = async () => {
    try {
        if (_db) {
            console.warn("Trying to init DB again!");
            return _db;
        }

        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
        _db = client.db(databaseName)
        return _db
    }
    catch (error) {
        throw error
    }
}

const getDb = () => {
    return _db;
}

module.exports = {
    initDb,
    getDb
}
