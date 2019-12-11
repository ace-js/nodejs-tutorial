module.exports = (err, req, res, next) => {
    const { message: error, statusCode = 500 } = err
    console.error('Error: ' + error)
    console.log(statusCode)
    if (process.env !== 'PRODUCTION') {
        return res.status(statusCode).send({ error })
    }
    res.status(statusCode).send({ error: `Error - ${statusCode}` })
}
