const express = require('express')
const router = express.Router();
const validate = require('express-validation')

const controllers = require('../controllers')
const validation = require('../validation')

router.get('/weather', validate(validation.weather), controllers.weather)

module.exports = router
