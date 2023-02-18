const mongoose = require("mongoose");

const User = mongoose.model('User', {
    name: String,
    theme: String,
    job: String,
    adress: String,
    tell: String,
    email: String,
    homepage: String,
    picture: String
});
module.exports = { User }