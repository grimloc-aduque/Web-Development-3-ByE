const mongoose = require('mongoose'); 

// Esquema de productos
const carritoSchema = new mongoose.Schema({
    secciones: [{
        sectionid: {
            type: String,
            required: true
        },
        productos: [{
            productid: {
                type: String,
                required: true
            },
            cantidad: {
                type: Number,
                required: true,
                default: 1,
                min: 1
            },
            agregado: {
                type: Date,
                'default': Date.now()
            }   
        }]
    }]
});


module.exports = {
    carritoSchema
};