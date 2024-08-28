const express = require("express");
const router = express.Router();
const learningsController = require("../controllers/learnings");

router.get("/dns", learningsController.getDnsLearnings);
router.get("/digitalocean", learningsController.getDoLearnings);
router.get("/seo", learningsController.getSeoLearnings);

module.exports = router;
