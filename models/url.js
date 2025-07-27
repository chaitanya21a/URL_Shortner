const mongoose = require('mongoose');
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
        type: Number,
    }}]
},{timestamps: true});

module.exports = mongoose.model('URL', urlSchema); 