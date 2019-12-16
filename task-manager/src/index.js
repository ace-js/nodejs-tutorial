const express = require('express')

const db = require('./db')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./router')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/api', router)
app.use(errorHandler)

db().then(() => {
    app.listen(port, () => console.log(`Server is up on port ${port}`))
})
