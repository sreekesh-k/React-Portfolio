const express = require('express');
const router = express.Router();
const TechCard = require('../models/TechCard'); 

router.get('/', async (req, res) => {
  try {
    const techCards = await TechCard.find(); 
    res.json(techCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;