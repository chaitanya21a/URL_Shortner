// const {nanoid} = require('nanoid');
const URL = require('../models/url');
async function generate_url(req,res){
    //dynamic import to avoid circular dependency issues
    const { nanoid } = await import('nanoid');
    const url= req.body.url;
    //if no url in post request, return error
    if(!url) return res.status(400).send('URL is required');
    const short=nanoid();
    await URL.create({
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
async function handlerequest(req,res){
    const short_id = req.params.id;
    const entry=await URL.findOneAndUpdate(
        { short_id: short_id },{$push:{visit_history:{timestamp:Date.now()}}},);
    return res.status(200).redirect(entry.original_url);
}

//to get analytics
async function getAnalytics(req, res) {
    const short_id=req.params.id;
    const entry = await URL.findOne({ short_id: short_id });
    if (!entry) {
        return res.status(404).send('URL not found');
    }
    res.status(200).json({
        original_url: entry.original_url,
        short_id: entry.short_id,
        total_clicks: entry.visit_history.length,
        visit_history: entry.visit_history,
    });
}
module.exports = {
    generate_url,
    handlerequest,
    getAnalytics,
};