const { successResponse } = require('../utils/response');

const getHealth = (req, res) => {
  const response = {
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL || ''
  };
  
  res.status(200).json(response);
};

module.exports = { getHealth };