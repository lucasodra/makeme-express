module.exports = errorFunction => (req, res, next) => {
    console.log("middleware/catchAsync.js before");
    Promise.resolve(errorFunction(req, res, next)).catch(next);
    console.log("middleware/catchAsync.js after");
}


