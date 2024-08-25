const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resume');

router.get('/', resumeController.downloadResume);
router.get('/downloads', resumeController.getDownloadCount);

module.exports = router;
