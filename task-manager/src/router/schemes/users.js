const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const getUser = {
    params: {
        id: Joi.objectId().required()
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

const updateUser = {
    body: {
        name: Joi.string().optional(),
        email: Joi.string().optional(),
        age: Joi.number().min(18).optional(),
        password: Joi.string().optional()
    },
    params: {
        id: Joi.objectId().required()
    }
}

const deleteUser = {
    params: {
        id: Joi.objectId().required()
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}