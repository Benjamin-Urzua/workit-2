const express = require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(8080, () =>{
    console.log("Servidor corriendo en el puerto 8080")
})