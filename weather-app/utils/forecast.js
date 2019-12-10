const rp = require('request-promise')

const config = require('../config')

const forecast = async (latitude, longitude) => {
    try {
        const response = await rp.get(`${config.darksky_url}/${longitude},${latitude}?units=ca`, { json: true })
        return response
    } catch (error) {
        throw error
    }
}

module.exports = forecast
