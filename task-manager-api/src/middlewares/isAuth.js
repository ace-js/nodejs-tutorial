const jwt = require('jsonwebtoken')

const responder = require('../lib/responder')

module.exports = async (req, res, next) => {
    try {
        const decoded = await jwt.verify(req.headers['auth-token'], process.env.SECRET_KEY)
        req.user = decoded.data
        next()
    } catch (error) {
        error.status = 401
        responder.error(res, error)
    }
}