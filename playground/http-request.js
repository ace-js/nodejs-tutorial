// Create request with core node module https
const https = require('https')

const url = 'https://api.darksky.net/forecast/eec976528bae89c3d36c36150b3096e4/4.417881,50.717139'

const request = https.request(url, response => {
    let data = ''

    response.on('data', chunck => {
        data += chunck.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', err => {
    console.log('Error: ', err)
})

request.end()
