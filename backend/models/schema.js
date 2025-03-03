const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    country : String,
})

module.exports = mongoose.model("User",userSchema);