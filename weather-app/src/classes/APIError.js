class APIError extends Error {
    constructor(m, status) {
        super(m)
        this.name = 'APIError'
        this.statusCode = status
    }
}

module.exports = APIError
