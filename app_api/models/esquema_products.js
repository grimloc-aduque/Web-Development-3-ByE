const mongoose = require('mongoose'); 

// Esquema de productos
const productsSchema = new mongoose.Schema({
    urlImagen:{
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        required: true
    },
    stock :{
        type: Number,
        required: true,
        min: 0,
        'default': 0
    },
    creado: {
        type: Date,
        'default': Date.now()
    }
});


module.exports = {
    productsSchema
};