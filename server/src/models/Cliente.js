const mongoose = require("mongoose")

const Cliente = mongoose.Schema({
	nombres:String,
    apellidos:String,
    email: String,
    contrasena: String,
    telefono: Number,
    run: String,
    fechaNacto: Date,
    region: String,
    provincia: String,
    comuna: String, 
    direccion: String,
})

module.exports = mongoose.model("Cliente", Cliente)