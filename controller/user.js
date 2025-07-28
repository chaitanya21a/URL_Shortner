const User = require('../models/users');
const { v4:uuidv4 }=require('uuid') // Importing uuid for unique user IDs, if needed
const {setuser}=require('../service/auth'); // Assuming you have a service for auth handling
async function handlesignup(req, res) {
    const {name, email, password} = req.body;
    if(await User.findOne({email})) {
        return res.render('signup', {error: 'Email already exists'});
    }
    await User.create({name, email, password});
    res.render('home',{id: null, urls: []});
}
async function handlelogin(req,res) {
    const {email, password} = req.body;
    const user=await User.findOne({email, password});
    if(!user) return res.render('login', {error: 'Invalid email or password'});
    console.log(user);
    const sessionId = uuidv4(); // Generate a unique session ID
    setuser(sessionId, user); // Store the session ID and user mapping
    res.cookie("uid", sessionId); // Store session ID in a cookie
    //we need to store this sessionId in a cookie or session store
    return res.redirect('/'); // Redirect to home after successful login
    
}
module.exports = { handlesignup, handlelogin };
