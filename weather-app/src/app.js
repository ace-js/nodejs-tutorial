const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const router = require('./router')
const errorHandler = require('./middlewares/errorHandler')

const port = process.env.PORT || 5000

app.use(bodyParser())

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Server listening on ', port)
})
