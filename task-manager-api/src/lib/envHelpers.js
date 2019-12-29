const isProd = () => process.env.ENVIRONMENT !== 'prod'

module.exports = {
    isProd
}
