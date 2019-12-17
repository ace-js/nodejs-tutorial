const Joi = require('joi')

const getUser = {
    params: {
        id: Joi.string().required()
    }
}

const createUser = {
    body: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        age: Joi.number().required(),
        password: Joi.string().required()
    }
}

module.exports = {
    getUser,
    createUser
}