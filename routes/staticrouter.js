const express = require('express');
const router = express.Router();
const URL = require('../models/url');
router.get('/', async (req, res) => {
    if(!req.user) return res.redirect('/login');
    const allurls=await URL.find({ createdby: req.user._id }).sort({ createdAt: -1 });
    return res.render("home",{
        urls:allurls,
        id: null
    });
});

router.get('/signup',(req, res) => {
    return res.render('signup');
});
router.get('/login',(req, res) => {
    return res.render('login');
});

module.exports = router;