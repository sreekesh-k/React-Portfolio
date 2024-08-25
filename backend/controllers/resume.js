const path = require("path");

const downloadResume = (req, res) => {
  const file = path.join(
    __dirname,
    "..",
    "public",
    "SreekeshKPrabhuResume.pdf"
  );
  res.download(file, "SreekeshKPrabhuResume.pdf", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file.");
    }
  });
};

module.exports = {
  downloadResume,
};
