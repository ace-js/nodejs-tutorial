const weatherFormmater = (request, weather, locationObject) => ({
    request,
    response: {
        weather,
        location: {
            place: locationObject.location,
            latitude: locationObject.latitude,
            longitude: locationObject.longitude
        }
    }
})

module.exports = weatherFormmater
