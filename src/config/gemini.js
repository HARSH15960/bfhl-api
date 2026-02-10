const { GoogleGenerativeAI } = require('@google/generative-ai');

let genAI = null;

const initializeGemini = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY not configured');
  }
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
};

const getGeminiInstance = () => {
  if (!genAI) {
    initializeGemini();
  }
  return genAI;
};

module.exports = { getGeminiInstance };