
const forecast = require('../utils/forecast')
const geocode = require('../utils/geocode')
const formatter = require('../formatters/weather')

module.exports = async (req, res) => {
    try {
        const { placeName, type, country } = req.query
        const location = await geocode(placeName, type, country)
        const weather = await forecast(location.latitude, location.longitude)

        res.status(200).send(formatter(req.query, weather.currently, location))
    } catch (error) {
        res.status(500).send(error)
    }
}
