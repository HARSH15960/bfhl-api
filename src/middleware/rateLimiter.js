const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL || '',
      error: 'Too many requests, please try again later'
    });
  }
});

module.exports = limiter;