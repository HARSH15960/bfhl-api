const express = require('express');
const { processBfhl } = require('../controllers/bfhl.controller');
const { validateBfhlRequest } = require('../middleware/validator');

const router = express.Router();

router.post('/', validateBfhlRequest, processBfhl);

router.get('/', (req, res) => {
  res.status(405).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL,
    error: 'Method Not Allowed'
  });
});

router.all('/', (req, res) => {
  res.status(405).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL,
    error: 'Method Not Allowed'
  });
});

module.exports = router;