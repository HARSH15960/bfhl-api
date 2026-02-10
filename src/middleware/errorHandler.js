const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL || '',
    error: err.message || 'Internal server error'
  });
};

module.exports = errorHandler;