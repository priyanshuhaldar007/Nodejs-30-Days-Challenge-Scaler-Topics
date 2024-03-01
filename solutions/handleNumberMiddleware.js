function positiveIntegerHandler(req, res) {
    const number = req.query.number;
  
    // Validate the parameter
    if (isNaN(number) || parseInt(number, 10) <= 0) {
      throw new Error('Invalid parameter: number must be a positive integer');
    }
  
    // Valid case - return success message
    res.json({ message: 'Success!' });
  }
  
  module.exports = positiveIntegerHandler;
  