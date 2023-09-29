const modelEspecialista = require("../models/Especialista")
const formidable = require("formidable")

const path = require('path')
const fs = require('fs')

module.exports.register = async (req, res) => {
    try {
        const form = new formidable.IncomingForm()
        const docsFolder = path.join(__dirname, "../../resources", "documents")
        //console.log("folder: ", docsFolder)
        var titulos = []
        var numeroTitulo = 0
        form.on('fileBegin', (formName, file) => {
            if (formName.includes("tituloProfesional")) {
                numeroTitulo++
                const formatoArchivo = file.mimetype.slice(6)
                const nombreArchivo = formName.replace("tituloProfesional", `tituloProfesional${numeroTitulo}`)
                titulos.push(nombreArchivo)
                let nuevoArchivo = file
                nuevoArchivo.filepath = `${docsFolder}/${nombreArchivo}.${formatoArchivo}`
                nuevoArchivo.newFilename = nombreArchivo
                form.emit('data', { name: 'fileBegin', value: nuevoArchivo });
            } else {
                const formatoArchivo = file.mimetype.slice(6)
                let nuevoArchivo = file
                nuevoArchivo.filepath = `${docsFolder}/${formName}.${formatoArchivo}`
                nuevoArchivo.newFilename = formName
                form.emit('data', { name: 'fileBegin', value: nuevoArchivo });
            }
        });


        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.log(`Hubo un problema al subir los archivos: ${err}`)
                res.status(200).json({ codigo: 3, msg: `Hubo un problema al subir los archivos: ${err}` })
            } else {

                const arrayFiles = Object.values(files).map(file => {
                    if (file[0].newFilename.includes("tituloProfesional")) {
                        return ["titulos", titulos]
                    } else {
                        if (file[0].newFilename.includes("cedIdentidad")) {
                            return ["cedIdentidad", file[0].newFilename]
                        }else if (file[0].newFilename.includes("certResidencia")){
                            return ["certResidencia", file[0].newFilename]
                        }else{
                            return ["certAntecedentes", file[0].newFilename]
                        }
                        
                    }
                })

                const objFiles = Object.fromEntries(arrayFiles)

                const especialista = new modelEspecialista({
                    nombres: fields["nombres"][0],
                    apellidos: fields["apellidos"][0],
                    contrasena: fields["contrasena"][0],
                    email: fields["email"][0],
                    telefono: fields["telefono"][0],
                    run: fields["run"][0],
                    region: fields["region"][0],
                    provincia: fields["provincia"][0],
                    comuna: fields["comuna"][0],
                    direccion: fields["direccion"][0],
                    file_cedIdentidad: objFiles["cedIdentidad"],
                    file_certResidencia: objFiles["certResidencia"],
                    file_titulosProfesionales: objFiles["titulos"],
                    file_certAntecedentes: objFiles["certAntecedentes"],
                    rubro: fields["rubro"][0],
                    profesion: fields["profesion"][0]
                })
                await especialista.save()
                    .then((result) => {
                        if (result != null) {
                            console.log("Registro exitoso: ", result)
                            res.status(200).json({ codigo: 1, msg: "Registro exitoso" })
                        } else {
                            res.status(200).json({ codigo: 2, msg: "Algo salio mal..." })
                            console.log("Algo salio mal...")
                        }
                    });
            }

        });
    } catch (error) {
        console.log("Ha ocurrido una excepción: ", error)
        res.status(200).json({ codigo: 10, msg: `Ha ocurrido una excepción: ${error}` })
    }
}

module.exports.login = async (req, res) => {
    try {
        const data = req.body
        console.log(data["email"])
        await modelEspecialista.findOne({ email: data["email"] })
            .exec()
            .then(
                especialista => {
                    if (especialista != null) {
                        if (especialista["contrasena"] != data["contrasena"]) {
                            console.log("La contraseña no coincide")
                            res.status(200).json({ codigo: 2, msg: "La contraseña no coincide" })
                        } else {
                            req.session.regenerate(err => {
                                if (err) next(err)
                                req.session.user = especialista["_id"]
                                req.session.save((err) => {
                                    if (err) { console.log(next(err)); res.status(200).json({ msg: err }) }
                                    res.status(200).json({ codigo: 1, userName: especialista["nombres"].substr(0, especialista["nombres"].search(" ")), sessionId: req.session.user, msg: "Sesión iniciada con éxito", tipoUsuario: "Especialista" })
                                    console.log("Sesión iniciada con éxito")

                                })
                            })
                        }
                    } else {
                        console.log("No existen usuarios con ese correo")
                        res.status(200).json({ codigo: 3, msg: "No existen usuarios con ese correo" })
                    }
                }

            )
    } catch (error) {
        console.log("Ha ocurrido una excepción: ", error)
        res.status(200).json({ codigo: 10, msg: `Ha ocurrido una excepción: ${error}` })
    }
}