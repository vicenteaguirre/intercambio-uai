const { config } = require('dotenv');
const mongoose = require('mongoose');
const { appConfig } = require('../config');
const { Schema, model } = mongoose;

const testimonioSchema = new Schema({
    nombre_completo: {
        type: String,
        required: true
    },
    edad: Number,
    u_destino: String,
    pais: String,
    testimonio: String,
    imageProfile:String
});

testimonioSchema.methods.setImageProfile = function setImageProfile (filename) {
    const {host,port} = appConfig
    this.imageProfile = `http://localhost:3001/public/${filename}.jpg`
}

const Testimonio = model('Testimonio', testimonioSchema);
module.exports = Testimonio;

