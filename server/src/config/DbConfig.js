const mongoose = require('mongoose');

const db = async () => await mongoose.connect('mongodb+srv://benjaminUrzua:benjaminUrzua@workit.4kojs.mongodb.net/').then(() => console.log("MongoDb conectado"))


module.exports = db
