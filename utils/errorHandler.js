class ErrorHandler extends Error {
    constructor(message, statusCode) {
        console.log("utils/errorHandler.js before");
        super(message)
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor)
        console.log("utils/errorHandler.js after");
    }
}

module.exports = ErrorHandler;