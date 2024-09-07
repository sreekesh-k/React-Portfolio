const express = require('express');
const router = express.Router();
const interviewprepController = require("../controllers/interviewPrep")

router.get('/features',interviewprepController.getPyFeaturesCheat);
router.get('/string',interviewprepController.getPyStringCheat);
router.get('/dsa',interviewprepController.getPyDsaCheat);

module.exports = router;
