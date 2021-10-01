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



});

const Usuario = new mongoose.model('User', usuariosSchema);
const user1 = new Usuario ({
    nombre: 'Jorge',
    apellido: 'Gutierrez',
    direccion: 'Ecuador',
    telefono: 0983731258,
    edad: 22,
    mail: 'jorge@hotmail.com',
    contraseña: '12345',
})

const user2 = new Usuario ({
    nombre: 'Alejandro',
    apellido: 'Duque',
    direccion: 'Ecuador',
    telefono: 0992659674,
    edad: 20,
    mail: 'aduquead13@outlook.com',
    contraseña: '12345',
})


// user1.save();
// user2.save();