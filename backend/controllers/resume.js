const path = require("path");
const Download = require("../models/DownloadCount");

const downloadResume = async (req, res) => {
  try {
    let downloadRecord = await Download.findOne();
    if (!downloadRecord) {
      downloadRecord = new Download();
    }

    downloadRecord.downloadCount += 1;
    await downloadRecord.save();

    const filePath = path.join(
      __dirname,
      "..",
      "public",
      "SreekeshKPrabhuResume.pdf"
    );
    res.download(filePath, "SreekeshKPrabhuResume.pdf", (err) => {
      if (err) {
        console.error("Error downloading the file:", err);
        res.status(500).send("Error downloading the file.");
      }
    });
  } catch (error) {
    console.error("Error processing download request:", error);
    res.status(500).send("Error processing download request.");
  }
};

const getDownloadCount = async (req, res) => {
  try {
    const downloadRecord = await Download.findOne();

    if (downloadRecord) {
      res.json({ downloadCount: downloadRecord.downloadCount });
    } else {
      res.json({ downloadCount: 0 });
    }
  } catch (error) {
    console.error("Error fetching download count:", error);
    res.status(500).send("Error fetching download count.");
  }
};

module.exports = {
  getDownloadCount,
  downloadResume,
};
