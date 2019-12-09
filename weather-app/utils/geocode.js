const rp = require('request-promise')
const get = require('lodash.get')

const config = require('../config.js')

const geocode = async (placeName, placeType, country) => {
    try {
        // use encodeURIComponent in case of special characters in the place name
        let url = `${config.mapbox_url}/${encodeURIComponent(placeName)}.json?access_token=${config.mapbox_token}&limit=1`
        if (placeType) url += `&types=${placeType}`
        if (country) url += `&country=${country}`

        const response = await rp(url, { json: true })
        if (response.features.length === 0) throw new Error(`There is no result for ${placeName}`)

        return get(response, 'features.0.center', [])
    } catch (error) {
        throw error
    }
}

module.exports = geocode
