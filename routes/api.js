const express = require('express');
const router = express.Router();

const contactController = require('../controllers/ContactController');

router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

router.post('/contact', contactController.submitContact);

module.exports = router;