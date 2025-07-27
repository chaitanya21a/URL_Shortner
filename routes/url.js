const express = require('express');
const router = express.Router();
const { generate_url } = require('../controller/url');
router.post('/',generate_url);
module.exports = router;