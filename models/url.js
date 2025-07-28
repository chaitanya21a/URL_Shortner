const mongoose = require('mongoose');
// const urlSchema = new mongoose.Schema({
//     short_id:{
//         type: String,
//         required: true,
//         Unique: true,
//     },
//     original_url: {
//         type: String,
//         required: true,
//     },
//     visit_history:[{timestamp:{
//         type: Date,
//     }}]
// },{timestamps: true});

//to keep track of who created the URL
const urlSchema = new mongoose.Schema({
    short_id:{
        type: String,
        required: true,
        Unique: true,
    },
    original_url: {
        type: String,
        required: true,
    },
    visit_history:[{timestamp:{
        type: Date,
    }}],
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true // Ensure that every URL is associated with a user
    }
},{timestamps: true});


module.exports = mongoose.model('URL', urlSchema); 