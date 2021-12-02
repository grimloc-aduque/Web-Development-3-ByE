const mongoose = require('mongoose');// incorporar mongoose al proyecto
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 

const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true,
    },
    apellido: {
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
    email: {
        type: String,
        required: true,
        unique: true
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
    },
    admin: {
        type: Boolean,
        required: true,
        'default': false
    },
    hash: String,
    salt: String
});


usuariosSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex'); // Crea un string aleatorio
    this.hash = crypto
                    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
                    .toString('hex');
                // Genera el hash con el password y el salt
};

usuariosSchema.methods.validPassword = function(password){
    const hash = crypto
                    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
                    .toString('hex');
    return this.hash === hash;
};

usuariosSchema.methods.generateJwt = function(){
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id : this._id,
        email: this.email,
        nombre: this.nombre,
        admin: this.admin,
        exp: parseInt(expiry.getTime() / 1000, 10)
    }, process.env.JWT_SECRET);
}


// Inicializo algunas instancias en la DB


// Creo usuarios
const Usuario = new mongoose.model('User', usuariosSchema);
const user = new Usuario ({
    nombre: 'Jorge',
    apellido: 'Gutierrez',
    telefono: 0983731258,
    edad: 22,
    email: 'jorge@hotmail.com',
    carrito: []
})
user.setPassword('12345')

// user.save();
