
const services = require('../services')
const formatter = require('../formatters/weather')

module.exports = async (req, res) => {
    try {
        const { placeName, type, country } = req.query
        const location = await services.geocode(placeName, type, country)
        const weather = await services.forecast(location.latitude, location.longitude)

        res.status(200).send(formatter(req.query, weather.currently, location))
    } catch (error) {
        res.status(500).send(error)
    }
}
