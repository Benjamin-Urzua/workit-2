const express = require('express')
const db = require('./src/config/DbConfig')
const cors = require('cors')
const session = require('express-session')
const routes = require("./src/routes/routes")

db().finally(() => {
    const app = express()
    app.use(cors()) //CORS
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(express.static('resources'))
    app.use(session({  //configuracion session
        secret: 'workit',
        resave: false,
        saveUninitialized: false
    }))

    app.use("/", routes) //IMPLEMENTANDO LAS RUTAS

    //DEFINIR UNA SOLA RUTA

    app.listen(8080, () => {
        console.log("Servidor corriendo http://localhost:8080/")
    })
    
   
})