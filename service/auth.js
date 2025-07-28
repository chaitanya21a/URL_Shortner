const sessionidtousermap = new Map(); // Map to store session IDs to user IDs

function setuser(id,user){
    sessionidtousermap.set(id,user);
}

function getuser(id){
    return sessionidtousermap.get(id);
}

module.exports = {
    setuser,
    getuser
};