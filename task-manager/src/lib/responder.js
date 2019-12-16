const httpStatus = require('http-status')

module.exports = {
    success: (res, { status = httpStatus.OK, payload } = {}) => {
        return res.status(status).send({
            meta: {
                status
            },
            data: payload || {}
        })
    },
    error: (res, err = { code: 500, name: 'Internal Server', message: 'Something went wrong' }) => {
        let status = err.status || httpStatus.INTERNAL_SERVER_ERROR
        console.log(err.code)
        const payload = {
            code: err.code,
            name: err.name,
            message: err.message,
            errors: []
        }

        if (process.env.NODE_ENV !== 'PRODUCTION') {
            payload.stack = err.stack
        }

        if (err.errors) {
            status = httpStatus.BAD_REQUEST
            Object.assign(payload, {
                code: httpStatus.BAD_REQUEST,
                errors: err.errors.map(error => ({ field: error.field, messages: error.messages }))
            })
        }

        res.status(status).send({
            meta: {
                status,
                ...payload,
                message: process.env.NODE_ENV !== 'PRODUCTION' ? payload.messages : 'Internal Server Error'
            }
        })
    }
}