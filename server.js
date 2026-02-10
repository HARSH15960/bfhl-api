require('dotenv').config();

if (!process.env.OFFICIAL_EMAIL) {
  console.error('OFFICIAL_EMAIL environment variable is required');
  process.exit(1);
}

if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY environment variable is required');
  process.exit(1);
}

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
