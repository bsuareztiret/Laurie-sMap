const express = require('express');
router = express.Router();
const { pagesController } = require('../controllers/pagesControllers');

router.get('/', pagesController);

module.exports = router;