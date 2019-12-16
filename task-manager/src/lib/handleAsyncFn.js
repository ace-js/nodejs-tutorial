module.exports = (fnToExecute) => {
    return async (req, res, next) => {
        try {
            await fnToExecute(req, res, next)
        } catch (error) {
            console.log(error.message)
            return next(error)
        }
    }
}