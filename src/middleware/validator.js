const validateBfhlRequest = (req, res, next) => {
  try {
    const body = req.body;
    
    if (!body || typeof body !== 'object' || Object.keys(body).length === 0) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL || '',
        error: 'Request body cannot be empty'
      });
    }

    const keys = Object.keys(body);
    
    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL || '',
        error: 'Request must contain exactly one key'
      });
    }

    const key = keys[0];
    const validKeys = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
    
    if (!validKeys.includes(key)) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL || '',
        error: 'Invalid key provided'
      });
    }

    const value = body[key];

    if (key === 'fibonacci') {
      if (!Number.isInteger(value) || value < 0 || value > 100) {
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL || '',
          error: 'Fibonacci input must be a non-negative integer (0-100)'
        });
      }
    }

    if (key === 'prime' || key === 'lcm' || key === 'hcf') {
      if (!Array.isArray(value) || value.length === 0) {
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL || '',
          error: `${key} input must be a non-empty array`
        });
      }
      
      if (value.length > 1000) {
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL || '',
          error: 'Array size cannot exceed 1000 elements'
        });
      }

      for (let num of value) {
        if (!Number.isInteger(num) || num < 1 || num > 1000000) {
          return res.status(400).json({
            is_success: false,
            official_email: process.env.OFFICIAL_EMAIL || '',
            error: 'All array elements must be positive integers (1-1000000)'
          });
        }
      }
    }

    if (key === 'AI') {
      if (typeof value !== 'string' || value.trim().length === 0) {
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL || '',
          error: 'AI input must be a non-empty string'
        });
      }
      
      if (value.length > 500) {
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL || '',
          error: 'AI question cannot exceed 500 characters'
        });
      }
    }

    req.validatedKey = key;
    req.validatedValue = value;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateBfhlRequest };