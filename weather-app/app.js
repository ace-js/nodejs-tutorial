const rp = require('request-promise')

const config = require('./config.js')

const getWeather = async () => {
    try {
        const [latitude, longitude] = await getCoordinates('Charleroi', 'place', 'be')
        const response = await rp.get(`${config.darksky_url}/${longitude},${latitude}?units=ca`, { json: true })
        console.log(`${response.daily.data[0].summary} It's currently ${response.currently.temperature} degrees out. There is a ${response.currently.precipProbability}% chance of rain.`)
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
        const result = response.features[0] || {}
        console.log(`The coordinates of ${placeName} are ${result.geometry.coordinates[1]}, ${result.geometry.coordinates[0]}`)
        return result.geometry.coordinates
    } catch (error) {
        throw new Error(error.message)
    }

}

getWeather()
