module.exports = (fnToExecute) => {
    return async (req, res, next) => {
        try {
            await fnToExecute(req, res, next)
        } catch (error) {
            return next(error)
        }
    }
}