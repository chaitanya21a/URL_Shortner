const { get } = require('mongoose');
const { getuser } = require('../service/auth'); // Assuming you have a service for auth handling
async function restricttologedinonly(req, res, next) {
    console.log(req);
    const sessionId = req.cookies?.uid;
    if (!sessionId) {
        return res.redirect('/login');
    }
    const user = await getuser(sessionId);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user; // Attach user to request object
    next();
}   
async function checkAuth(req,res,next){
    const sessionId = req.cookies?.uid;
    const User =getuser(sessionId);
    req.user = User;
    next();
}

module.exports = { restricttologedinonly, checkAuth };