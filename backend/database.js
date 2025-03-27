const mongoose = require('mongoose')
require('dotenv').config()
function connect() {
    mongoose.connect(process.env.db_URL)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(`Error while connecting to Database : ${err}`))
}

module.exports = connect;