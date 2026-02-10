# BFHL API – Qualifier Test Submission

This project implements two REST APIs as per the qualifier requirements.

## 🔗 Base Endpoints

- POST `/bfhl`
- GET `/health`

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Google Gemini AI
- Helmet (Security Headers)
- CORS
- Rate Limiting

---

## 📌 API Details

### 1️⃣ GET /health

Health check endpoint.

**Response**
```json
{
  "is_success": true,
  "official_email": "harsh0765.be23@chitkara.edu.in"
}
