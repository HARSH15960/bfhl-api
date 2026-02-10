const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bfhlRoute = require('./routes/bfhl.route');
const healthRoute = require('./routes/health.route');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(rateLimiter);

app.use('/bfhl', bfhlRoute);
app.use('/health', healthRoute);

app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL || '',
    error: 'Route not found'
  });
});

app.use(errorHandler);

module.exports = app;