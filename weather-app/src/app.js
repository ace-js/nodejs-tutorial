const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const router = require('./router')

const port = process.env.PORT || 5000

app.use(bodyParser())

app.use(router)

app.listen(port, () => {
    console.log('Server listening on ', port)
})
