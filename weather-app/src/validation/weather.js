var Joi = require('joi');

module.exports = {
    query: {
        placeName: Joi.string().required(),
        type: Joi.string().allow(null),
        country: Joi.string().allow(null)
    }
}