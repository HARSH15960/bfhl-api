const { GoogleGenerativeAI } = require('@google/generative-ai');
const { AI_TIMEOUT } = require('../utils/constants');

const sanitizeAIResponse = (text) => {
  if (!text) return '';
  return text.trim().split(/\s+/)[0].replace(/[^a-zA-Z0-9-]/g, '');
};

const getAIResponse = async (question) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview'
    });

    const result = await Promise.race([
      model.generateContent(`Answer in one word only: ${question}`),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('AI timeout')), AI_TIMEOUT)
      )
    ]);

    const response = await result.response;
    const text = response.text();

    const sanitized = sanitizeAIResponse(text);

    if (!sanitized) {
      throw new Error('Invalid AI response');
    }

    return sanitized;

  } catch (error) {
    console.error('REAL AI ERROR:', error);
    throw new Error('AI service unavailable');
  }
};

module.exports = { getAIResponse };
