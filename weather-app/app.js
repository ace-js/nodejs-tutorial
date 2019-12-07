const rp = require('request-promise')
const get = require('lodash.get')

const config = require('./config.js')

const getWeather = async () => {
    try {
        const [latitude, longitude] = await getCoordinates('Charleroi', 'place', 'be')
        const response = await rp.get(`${config.darksky_url}/${longitude},${latitude}?units=ca`, { json: true })
        console.log(`${get(response, 'daily.data.0.summary', '')} It's currently ${get(response, 'currently.temperature', 'Unkown')} degrees out. There is a ${get(response, 'currently.precipProbability', 'Unknown')}% chance of rain.`)
    } catch (error) {
        console.log('Error: ', error.message)
    }
}

const getCoordinates = async (placeName, placeType, country) => {
    try {
        let url = `${config.mapbox_url}/${placeName}.json?access_token=${config.mapbox_token}&limit=1`
        if (placeType) url += `&types=${placeType}`
        if (country) url += `&country=${country}`

        const response = await rp(url, { json: true })
        return get(response, 'features.0.center', [])
    } catch (error) {
        throw new Error(error.message)
    }
}

getWeather()
