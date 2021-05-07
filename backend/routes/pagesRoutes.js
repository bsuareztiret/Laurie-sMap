const express = require('express');
router = express.Router();
const { pagesScrapper } = require('../controllers/pagesScrapper');

router.get('/', pagesScrapper);

module.exports = router;