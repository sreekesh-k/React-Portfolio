const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resume');

router.get('/', resumeController.downloadResume);

module.exports = router;
