const rp = require('request-promise')

const geocode = require('./geocode')
const config = require('../config')

const forecast = async (city, type, country) => {
    try {
        const [latitude, longitude] = await geocode(city, type, country)
        const response = await rp.get(`${config.darksky_url}/${longitude},${latitude}?units=ca`, { json: true })

        return response
    } catch (error) {
        throw error
    }
}

module.exports = forecast
 