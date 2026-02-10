require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function quickTest() {
  const API_KEY = 'AIzaSyAzsk0-5LPArQfpTjvLu3wmk2FZN3sEp6c';
  
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });
    
    const result = await model.generateContent('What is 2+2? Answer in one word.');
    const response = await result.response;
    
    console.log('✓ SUCCESS! Response:', response.text());
  } catch (error) {
    console.error('✗ FAILED:', error.message);
  }
}

quickTest();