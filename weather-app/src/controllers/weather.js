
const services = require('../services')
const formatter = require('../formatters/weather')

module.exports = async (req, res, next) => {
    try {
        const { placeName, type, country } = req.query
        const location = await services.geocode(placeName, type, country)
        const weather = await services.forecast(latitude, location.longitude)

        res.status(200).send(formatter(req.query, weather.currently, location))
    } catch (error) {
        next(error)// next'll send the error to our errorHandler middleware
    }
}
