const express = require('express');
const router = express.Router();
const githubController = require('../controllers/github');

router.get('/languages', githubController.getLanguageChart);

module.exports = router;
