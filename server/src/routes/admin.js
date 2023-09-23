const adminRoutes = require("../config/Router")

//test
adminRoutes.get("/", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

module.exports = adminRoutes
