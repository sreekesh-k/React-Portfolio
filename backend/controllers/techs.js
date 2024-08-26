const TechCard = require("../models/TechCard");

const getTechs = async (req, res) => {
  try {
    const techCards = await TechCard.find({}, { description: 0 });
    res.json(techCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getTechById = async (req, res) => {
  try {
    const techCard = await TechCard.findById(req.params.id);
    if (techCard) {
      res.json({ description: techCard.description });
    } else {
      res.status(404).json({ message: "TechCard not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getTechs,
  getTechById,
};
