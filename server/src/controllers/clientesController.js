const modelCliente = require("../models/Cliente")
module.exports.register = async (req, res) => {
    try {
        const data = req.body
        const cliente = new modelCliente(data)
        await cliente.save()
            .then((result) => {
                if (result != null) {
                    console.log("Registro exitoso: ", result)
                    res.status(200).json({ codigo: 1, msg: "Registro exitoso" })
                }else{
                    res.status(200).json({ codigo: 2, msg: "Algo salio mal..." })
                    console.log("Algo salio mal...")
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
        await modelCliente.findOne({ email: data["email"] })
            .exec()
            .then(
                cliente => {
                    if (cliente != null) {
                        if (cliente["contrasena"] != data["contrasena"]) {
                            console.log("La contraseña no coincide")
                            res.status(200).json({ codigo: 2, msg: "La contraseña no coincide" })
                        } else {
                            req.session.regenerate(err => {
                                if (err) next(err)
                                req.session.user = cliente["_id"]
                                req.session.save((err) => {
                                    if (err) { console.log(next(err)); res.status(200).json({ msg: err }) }
                                    res.status(200).json({ codigo: 1, userName: cliente["nombres"].substr(0, cliente["nombres"].search(" ")), sessionId: req.session.user,msg: "Sesión iniciada con éxito", tipoUsuario: "Cliente" })
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