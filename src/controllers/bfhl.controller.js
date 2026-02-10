const { generateFibonacci } = require('../services/fibonacci.service');
const { filterPrimes } = require('../services/prime.service');
const { calculateLCM } = require('../services/lcm.service');
const { calculateHCF } = require('../services/hcf.service');
const { getAIResponse } = require('../services/ai.service');
const { successResponse } = require('../utils/response');

const processBfhl = async (req, res, next) => {
  try {
    const key = req.validatedKey;
    const value = req.validatedValue;
    let data;

    switch (key) {
      case 'fibonacci':
        data = generateFibonacci(value);
        break;

      case 'prime':
        data = filterPrimes(value);
        break;

      case 'lcm':
        data = calculateLCM(value);
        break;

      case 'hcf':
        data = calculateHCF(value);
        break;

      case 'AI':
        data = await getAIResponse(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL || '',
          error: 'Invalid operation'
        });
    }

    res.status(200).json(successResponse(data));
  } catch (error) {
    if (error.message.includes('AI service')) {
      return res.status(503).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL || '',
        error: error.message
      });
    }
    next(error);
  }
};

module.exports = { processBfhl };
