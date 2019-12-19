const express = require('express')

const db = require('./db')
const errorHandler = require('./middlewares/errorHandler')
const routers = require('./routers')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, `./config/.env.${process.env.ENVIRONMENT}`)})
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/api', routers)
app.use(errorHandler)

db().then(() => {
    app.listen(port, () => console.log(`Server is up on port ${port}`))
})
