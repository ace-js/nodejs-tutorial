const httpStatus = require('http-status')

const responder = require('./responder')

module.exports = {
    updateValidation: (allowedKeys = [], object, res) => {
        const isValid = Object.keys(object).every(key => allowedKeys.includes(key))
        if (!isValid) {
            return responder.error(res, {
                status: httpStatus.BAD_REQUEST,
                message: 'You tried to update unauthorized key(s)'
            })
        }
    }
}