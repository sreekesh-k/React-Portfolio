const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema({
  downloadCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Download", downloadSchema);
