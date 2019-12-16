const httpStatus = require('http-status')

const responder = require('../lib/responder')
const User = require('../db/User')
const userServices = require('../services/users')(User)

const getUsers = async (req, res) => {
    const users = await userServices.makeFetchUsers()

    responder.success(res, {
        code: httpStatus.OK,
        payload: { users }
    })
}

const createUser = async (req, res) => {
    const user = await userServices.makeCreateUser(req.body)

    responder.success(res, {
        code: httpStatus.OK,
        payload: { user }
    })
}

module.exports = {
    getUsers,
    createUser
}