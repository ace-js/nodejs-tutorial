const rp = require('request-promise')

const config = require('../config')
const APIError = require('../classes/APIError')

const forecast = async (latitude, longitude) => {
    try {
        const response = await rp.get(`${config.darksky_url}/${longitude},${latitude}?units=ca`, { json: true })
        if (!response.currently) throw APIError('Weather not found', 404)
        return response
    } catch (error) {
        throw error
    }
}

module.exports = forecast
