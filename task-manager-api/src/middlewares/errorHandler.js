const responder = require('../lib/responder')

module.exports = (err, req, res, next) => {
    if (!err.status) {
        err.status = 500
    }
    responder.error(res, err)
}
