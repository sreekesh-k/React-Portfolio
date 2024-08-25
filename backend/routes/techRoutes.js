const express = require('express');
const router = express.Router();
const techs = require("../controllers/techs")

router.get('/', techs.getTechs);


module.exports = router;