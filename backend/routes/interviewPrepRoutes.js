const express = require('express');
const router = express.Router();
const interviewprepController = require("../controllers/interviewPrep")

router.get('/hash',interviewprepController.getHashCheat);
router.get('/string',interviewprepController.getStringCheat);

module.exports = router;
