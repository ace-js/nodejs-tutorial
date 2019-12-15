// CRUD

const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const runDb = async () => {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(databaseName)

        // find return a cursor not a result like findOne, this example gives as a paging demo
        const searchCursor = db.collection('users').find({ age: { $gt: 25 } })
        const result = { skiped: 2 }

        result.total = await searchCursor.count() 
        result.data = await searchCursor.skip(2).limit(2).toArray()
        console.log(result); // 

        // Set as completed all tasks with react in its description and completed value to false
        await db.collection('tasks').updateMany({ description: {$regex : /.*React.*/}, completed: false}, { $set: { completed: true } })

    } catch (error) {
        console.log('Unable to connect to db');
    }
}

runDb()