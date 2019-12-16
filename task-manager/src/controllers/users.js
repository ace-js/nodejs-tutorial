const httpStatus = require('http-status')

const responder = require('../lib/responder')
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

module.exports = {
    getUsers,
    getUser,
    createUser
}