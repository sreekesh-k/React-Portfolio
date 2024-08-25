const TechCard = require('../models/TechCard'); 

const getTechs = async (req, res) => {
  try {
    const techCards = await TechCard.find();
    res.json(techCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTechs,
};
