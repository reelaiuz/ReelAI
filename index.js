const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/videos', async (req, res) => {
  const { query, per_page = 10 } = req.query;
  const apiKey = process.env.PEXELS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API kaliti topilmadi' });
  }

  try {
    const response = await axios.get('https://api.pexels.com/videos/search', {
      headers: { Authorization: apiKey },
      params: { query, per_page, orientation: 'portrait' } // 9:16 videolar
    });
    res.json(response.data);
  } catch (error) {
    console.error('Pexels API xatosi:', error.message);
    res.status(500).json({ error: 'Pexelsdan ma’lumot olishda xato' });
  }
});

// Eksport qilish (Vercel serverless uchun)
module.exports = app;