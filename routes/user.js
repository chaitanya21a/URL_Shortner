const {handlesignup,handlelogin} = require('../controller/user');
const express = require('express');
const router = express.Router();
router.post('/',handlesignup);
router.post('/login',handlelogin);
module.exports = router;