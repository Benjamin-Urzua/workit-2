const express = require('express')
const db = require('./src/config/DbConfig')
var cors = require('cors')
const adminRoutes = require("./src/routes/admin")

db().finally(() => {
    const app = express()
    app.use(cors())
    app.use("/admin", adminRoutes)
    app.listen(8080, () => {
        console.log("Servidor corriendo en el puerto 8080")
    })
    
    /*
    app.get("/", (req, res) =>{
        res.json({"users": ["userOne", "userTwo", "userThree"]})
    })
    */
})