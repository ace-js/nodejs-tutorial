const rp = require('request-promise')
const get = require('lodash.get')

const config = require('../config')
const APIError = require('../classes/APIError')

const geocode = async (placeName, placeType, country) => {
    try {
        if (!placeName) new APIError('Please provide a place name', 401)
        // use encodeURIComponent in case of special characters in the place name
        let url = `${config.mapbox_url}/${encodeURIComponent(placeName)}.json?access_token=${config.mapbox_token}&limit=1`
        if (placeType) url += `&types=${placeType}`
        if (country) url += `&country=${country}`

        const response = await rp(url, { json: true })
        if (response.features.length === 0) throw new APIError(`There is no result for ${placeName}`, 404)

        const targetedPlace = get(response, 'features.0', {})

        return {
            latitude: get(targetedPlace, 'center.0'),
            longitude: get(targetedPlace, 'center.1'),
            location: targetedPlace.place_name
        }
    } catch (error) {
        throw error
    }
}

module.exports = geocode
