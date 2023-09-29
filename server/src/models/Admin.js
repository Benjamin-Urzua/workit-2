const mongoose = require("mongoose")

const Admin = mongoose.Schema({
	user:String,
    password:String
})

module.exports = mongoose.model("Admin", Admin)