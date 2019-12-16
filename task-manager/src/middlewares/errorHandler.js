const responder = require('../lib/responder')

module.exports = (err, req, res, next) => {
    responder.error(res, err)
}
