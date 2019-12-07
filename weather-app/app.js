const rp = require('request-promise')

const config = require('./config.js')

const getWeather = async () => {
    try {
        const response = await rp.get(`${config.darksky_url}/37.8267,-122.4233?units=ca`, {json: true})
        console.log(`${response.daily.data[0].summary} It's currently ${response.currently.temperature} degrees out. There is a ${response.currently.precipProbability}% chance of rain.`)
    } catch (error) {
        console.log('Error: ', error.message)
    }
}


getWeather()