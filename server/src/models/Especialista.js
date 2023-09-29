const mongoose = require("mongoose")

const Especialista = mongoose.Schema({
	nombres:String,
    apellidos:String,
    contrasena: String,
    email: String,
    telefono: Number,
    run: String,
    region: String,
    provincia: String,
    comuna: String, 
    direccion: String,
    file_cedIdentidad: String,
    file_certResidencia: String,
    file_titulosProfesionales: Array,
    file_certAntecedentes: String,
    rubro: String,
    profesion: String
})

module.exports = mongoose.model("Especialista", Especialista)