const isProd = () => process.env.NODE_ENV !== 'PRODUCTION'

module.exports = {
    isProd
}
