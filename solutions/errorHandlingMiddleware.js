function errorHandler(err, req, res, next) {
    // Check for specific error message
    if (err.message === 'Invalid parameter: number must be a positive integer') {
      res.status(400).json({ error: 'Bad Request: Invalid number parameter' });
    } else {
      // Pass through other errors to default handler
      next(err);
    }
  }
  
  module.exports = errorHandler;
  