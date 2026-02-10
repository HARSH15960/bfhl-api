const successResponse = (data) => ({
  is_success: true,
  official_email: process.env.OFFICIAL_EMAIL || '',
  data
});

const errorResponse = (error) => ({
  is_success: false,
  official_email: process.env.OFFICIAL_EMAIL || '',
  error
});

module.exports = { successResponse, errorResponse };