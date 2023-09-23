const mongoose = require("mongoose")

const admin = mongoose.Schema({
	user:String,
    password:String
})

module.exports = mongoose.model("Admin", admin)