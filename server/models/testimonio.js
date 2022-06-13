const mongoose = require('mongoose');
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
    imageProfile:String,
    state: {
        type: String,
        default: "unpublished"
    }
});

const setImageProfile = function setImageProfile (filename) {
    return(`http://localhost:3001/public/${filename}.jpg`);
}

const Testimonio = model('Testimonio', testimonioSchema);
module.exports = {Testimonio, setImageProfile};

