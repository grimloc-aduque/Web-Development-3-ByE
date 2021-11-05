const mongoose = require('mongoose');// incorporar mongoose al proyecto

const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        'default': 000000000,
        required: true,
    },
    edad: {
        type: Number,
        'default': 18,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    
    },
    contraseña:{
        type: String,
        required: true,
    },
    creado:{
        type: Date, 
        'default': Date.now
    },
    carrito: {
        type: [{
            sectionid: {
                type: String,
                required: true
            },
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
        }],
        'default': []
    }
});


// Inicializo algunas instancias en la DB

// Creo un carrito
const carrito1 = [{
    sectionid: '61634a215d686cb45515b38c',
    productid: '61634a215d686cb45515b38d',
    cantidad: 4
},{
    sectionid: '61634a215d686cb45515b38f',
    productid: '61634a215d686cb45515b390',
    cantidad: 2
}];

const carrito2 = [{
    sectionid: '61634a215d686cb45515b38c',
    productid: '61634a215d686cb45515b38e',
    cantidad: 3
},{
    sectionid: '61634a215d686cb45515b38f',
    productid: '61634a215d686cb45515b391',
    cantidad: 5
}];


// Creo usuarios
const Usuario = new mongoose.model('User', usuariosSchema);
const user1 = new Usuario ({
    nombre: 'Jorge',
    apellido: 'Gutierrez',
    direccion: 'Ecuador',
    telefono: 0983731258,
    edad: 22,
    mail: 'jorge@hotmail.com',
    contraseña: '12345',
    carrito: carrito1
})

const user2 = new Usuario ({
    nombre: 'Alejandro',
    apellido: 'Duque',
    direccion: 'Ecuador',
    telefono: 0992659674,
    edad: 20,
    mail: 'aduquead13@outlook.com',
    contraseña: '12345',
    carrito: carrito2
})


//user1.save();
// user2.save();