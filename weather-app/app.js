const forecast = require('./utils/forecast')

forecast('Charleroi').then(response => {
    console.log(response)
}).catch(error => console.log(error.message))
