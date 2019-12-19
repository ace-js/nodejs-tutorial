const httpStatus = require('http-status')

const responder = require('../lib/responder')
const validator = require('../lib/customValidators')
const User = require('../db/User')
const userServices = require('../services/users')(User)

const getUsers = async (req, res) => {
    const users = await userServices.makeFetchUsers()

    responder.success(res, {
        status: httpStatus.OK,
        payload: { users }
    })
}

const getUser = async (req, res) => {
    const user = await userServices.makeFetchUser(req.params.id, res)

    if (!user) {
        return responder.error(res, {
            status: httpStatus.NOT_FOUND
        })
    }

    responder.success(res, {
        status: httpStatus.OK,
        payload: { user }
    })
}

const createUser = async (req, res) => {
    const user = await userServices.makeCreateUser(req.body)

    responder.success(res, {
        status: httpStatus.CREATED,
        payload: { user }
    })
}

const updateUser = async (req, res) => {
    const allowedKeys = ['name', 'age', 'email', 'password']
    validator.updateValidation(allowedKeys, req.body, res)

    const user = await userServices.makeUpdateUser(req.params.id, req.body, res)

    if (!user) {
        return responder.error(res, {
            status: httpStatus.NOT_FOUND
        })
    }

    responder.success(res, {
        status: httpStatus.OK,
        payload: { user }
    })
}

const deleteUser = async (req, res) => {
    const user = await userServices.makeDeleteUser(req.params.id)

    if (!user) {
        return responder.error(res, {
            status: httpStatus.NOT_FOUND
        })
    }

    responder.success(res, {
        status: httpStatus.OK
    })
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}