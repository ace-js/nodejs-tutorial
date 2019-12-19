const httpStatus = require('http-status')

const envHelpers = require('./envHelpers')

module.exports = {
    success: (res, { status = httpStatus.OK, payload } = {}) => {
        return res.status(status).send({
            meta: {
                status
            },
            data: payload || {}
        })
    },

    error: (res, err = { status: 500, name: 'Internal Server', message: 'Something went wrong' }) => {
        const meta = {
            status: err.status,
            name: err.name,
            message: err.message,
            errors: []
        }

        if (err.errors) {
            Object.assign(meta, {
                status: httpStatus.BAD_REQUEST,
                errors: Array.isArray(err.errors)
                    ? err.errors.map(error => ({ key: error.field[0], message: error.messages[0] })) // express-validation error
                    : Object.keys(err.errors).map(key => ({ key, message: err.errors[key].message })) // mongoose validation error
            })
        }

        if (!envHelpers.isProd()) {
            meta.stack = err.stack
        } else if (meta.status === httpStatus.INTERNAL_SERVER_ERROR) {
            meta.message = 'Internal Server Error'
        }

        res.status(meta.status).send({ meta })
    }
}