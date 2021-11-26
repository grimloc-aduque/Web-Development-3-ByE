const mongoose = require('mongoose');
const Users = mongoose.model('User');


// Controladores
// Crear Usuarios

const userCreate = (req, res) => {
    Users.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        edad: req.body.edad,
        email: req.body.email,
        contraseña: req.body.contraseña
    }, (err, objetoUsuario) => {
        if (err) {
            return res
                .status(400)
                .json(err)
        } else {
            return res
                .status(201)
                .json(objetoUsuario);
        }
    });
};

// Listar todos los documentos de la coleccion
const userList = (req, res) => {
    Users
        .find() // obtener todos los documentos de la coleccion
        //.select('nombre apellido')
        .exec((err, objetoUsuario) => {
            if (!objetoUsuario || objetoUsuario.length == 0) { // find no encontro el documentos en la coleccion
                console.log(`No existen documentos en la coleccion ${users}`);
                return res // respondo el mensaje en formato JSON y status HTTP 404
                    .status(404)
                    .json({
                        "Mensaje": "Usuarios no encontrados"
                    });
            } else if (err) { // find encontro un error
                console.log(`Se encontro un error en la coleccion ${users}`);
                return res // respondo el error en formato JSON y status HTTP 404
                    .status(404)
                    .json(err);
            }
            res // respondo los documentos encontrados en formato JSON y status HTTP 200
                .status(200)
                .json(objetoUsuario);
        });
};

// Búsqueda por mail
const userFindEmail= (req, res) => {
    const buscar = new RegExp(req.params.email);
    console.log(`Buscar usuario con mail: ${buscar}`);
    Users
        .find({
            'email': buscar 
        }) 
        .exec((err, objetoUsuario) => {
            if (!objetoUsuario || objetoUsuario.length == 0) { 
                console.log(`No existen documentos con nombre ${buscar}`);
                return res // respondo el mensaje en formato JSON y status HTTP 404
                    .status(404)
                    .json({
                        "Mensaje": "Usuario no encontrado"
                    });
            } else if (err) { // find encontro un error
                console.log(`Se encontro un error en la coleccion ${users} con nombre: ${buscar}`);
                return res // respondo el error en formato JSON y status HTTP 404
                    .status(404)
                    .json(err);
            }
            console.log(`Se encontró el documento con nombre ${req.params.name}`);
            res // respondo los documentos encontrados en formato JSON y status HTTP 200
                .status(200)
                .json(objetoUsuario);
        });
};


// Buscar un usuario con userid
const userRead = (req, res) => {
    Users
        .findById(req.params.userid) // obtener el userid de los parámetros de la URL
        .exec((err, objetoUsuario) => {
            if (!objetoUsuario) { // findById no encontro el documento
                console.log(`Usuario con userid: ${req.params.userid} no encontrado`);
                return res // respondo el mensaje en formato JSON y status HTTP 404
                    .status(404)
                    .json({
                        "Mensaje": "Usuario no encontrado"
                    });
            } else if (err) { // findById encontro un error
                return res // respondo el error en formato JSON y status HTTP 404
                    .status(404)
                    .json(err);
            }
            res // respondo el documento encontrado en formato JSON y status HTTP 200
                .status(200)
                .json(objetoUsuario);
        });
};

// Actualizar un documento
const userUpdate = (req, res) => {
    if (!req.params.userid) {
        return res
            .status(404)
            .json({
                "message": "Ingrese un userid válido"
            });
    }
    Users
        .findById(req.params.userid)
        .exec((err, objetoUsuario) => {
            if (!objetoUsuario) {
                return res
                    .status(404)
                    .json({
                        "message": "userid no existe"
                    })
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            console.log(req.body)
            if(req.body.carrito)
                objetoUsuario.carrito = req.body.carrito;
            else{
                objetoUsuario.nombre = req.body.nombre;
                objetoUsuario.apellido = req.body.apellido;
                objetoUsuario.telefono = req.body.telefono;
                objetoUsuario.email = req.body.email;
                objetoUsuario.edad = req.body.edad;
                objetoUsuario.contraseña = req.body.contraseña;
            }
            objetoUsuario.save((err, users) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(users);
                }
            })
        })
};

// Eliminar Usuario
const userDelete = (req, res) => {
    if (req.params.userid) {
        Users
            .findByIdAndDelete(req.params.userid)
            .exec((err, objetoUsuario) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err)
                }
                res
                    .status(204)
                    .json(null)
            });
    } else {
        res
            .status(404)
            .json({ "Mensaje": "Usuario no encontrado" });
    }
};

module.exports = {
    userCreate,
    userList,
    userFindEmail,
    userRead,
    userUpdate,
    userDelete
};