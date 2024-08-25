const mongoose = require("mongoose");
const { Schema } = mongoose;

const techCardSchema = new Schema({
  logo: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TechCard = mongoose.model("TechCard", techCardSchema);

module.exports = TechCard;
