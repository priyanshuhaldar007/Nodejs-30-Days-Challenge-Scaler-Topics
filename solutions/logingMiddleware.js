function logingMiddleware(req, res, next) {
    const timestamp = new Date();
    const method = req.method;

    console.log(`${timestamp} - ${method} request received`);

    next();
}

module.exports = logingMiddleware;