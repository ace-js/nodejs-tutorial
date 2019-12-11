const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ev = require('express-validation')

const router = require('./router')

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(router)

app.use(function (err, req, res, next) {
    // specific for validation errors
    if (err instanceof ev.ValidationError) return res.status(err.status).send(err);
   
    // other type of errors, it *might* also be a Runtime Error
    // example handling
    if (process.env.NODE_ENV !== 'production') {
      return res.status(500).send(err.stack);
    } else {
      return res.status(500);
    }
  });

app.listen(port, () => {
    console.log('Server listening on ', port)
})
