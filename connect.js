const mongoose = require('mongoose');
async function connectDB(url){
    if(!url) throw new Error('Database URL is required');
    await mongoose.connect(url);
};
module.exports = {
    connectDB
};