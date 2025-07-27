const {nanoid} = require('nanoid');
const URL = require('../models/url');
async function generate_url(req,res){
    const url= req.body.url;
    //if no url in post request, return error
    if(!url) return res.status(400).send('URL is required');
    const short=nanoid(8);
    await URL.insertOne({
        short_id: short,
        original_url: url,
        visit_history: []
    });
    return res.status(200).json({
        short_id: short
    });
}
//package called nano-id to generate unique ids
//we have to pass length of id we want to generate nano(idLength)

module.exports = {
    generate_url
};