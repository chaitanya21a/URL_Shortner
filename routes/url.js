const express = require('express');
const router = express.Router();
const { generate_url, handlerequest,getAnalytics} = require('../controller/url');
router.post('/',generate_url);
router.get('/:id',handlerequest);
router.get('/analytics/:id',getAnalytics);
module.exports = router;