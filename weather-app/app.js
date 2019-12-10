const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const getWeather = async (placeName) => {
    try {
        const { location, latitude, longitude } = await geocode(placeName)
        const { currently: { summary, temperature, precipProbability } } = await forecast(latitude, longitude)
        console.log(location)
        console.log(`${summary}, It's currently ${temperature} degrees out. There is ${precipProbability}% chance of rain`)
    } catch (error) {
        console.log(error.message)
    }
}

getWeather(process.argv[2])
