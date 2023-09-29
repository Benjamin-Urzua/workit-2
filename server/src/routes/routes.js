const express = require("express")
const router = express.Router()

//IMPORT DE LOS CONTROLLERS
const especialistasController = require("../controllers/especialistasController")
const clientesController = require("../controllers/clientesController")

//ADMIN
router.get("admin", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

//ESPECIALISTAS

router.post("/especialistas/login", especialistasController.login)
router.post("/especialistas/register", especialistasController.register)

//CLIENTES

router.post("/clientes/login", clientesController.login)
router.post("/clientes/register", clientesController.register)

module.exports = router