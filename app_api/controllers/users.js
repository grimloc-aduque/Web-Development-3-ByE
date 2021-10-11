const mongoose = require('mongoose');
const Users = mongoose.model('User');


//controladores 

const userCreate = (req, res) =>{
    Users.create(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            edad: req.body.edad,
            mail: req.body.mail,
            contraseña: req.body.contraseña,
        }, 
        (err, objetoUser) => {
            if(err){
                return res
                    .status(400)
                    .json(err);
            } 
            else{
                return res
                    .status(201)
                    .json(objetoUser)
            }
        }
    );
};


const userList = (req, res) =>{
    Users
    .find()
    .exec((err, objetoUsuario) => {
        if(!objetoUsuario || objetoUsuario.length ===0){
            return res  
                .status(404)
                .json({
                    "Mensaje": "No se encontro resultados"
                });
        }else if (err){
            return res
                .status(404)
                .json(err);
        }
       res  
       .status(200)
       .json(objetoUsuario);
    });
};


const userRead = (req, res) =>{
    const id = req.params.userid
    Users
         .findById(id)
         .exec((err, objetoUsuario) => {
            if(!objetoUsuario){
                console.log(`Usuario con user id : ${id} no encontrado`)
                return res  
                    .status(404)
                    .json({
                        "Mensaje": "No se encontro el usuario"
                    });
            }else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            res  
                .status(200)
                .json(objetoUsuario);
         });
};


const userUpdate = (req, res) =>{
    const id = req.params.userid
    if(!id){
        return res
            .status(404)
            .json({
                "message": "Ingrese un userid valido"
            })
    }
    Users
        .findById(id)
        .exec((err, objetoUser) =>{
            if(!objetoUser) {
                return res
                    .status(404)
                    .jason({
                        "message": "userid no existe"
                    });
            }
            else if(err) {
                return res
                    .status(400)
                    .jason(err);
            }
            objetoUser.nombre = req.body.nombre;
            objetoUser.apellido = req.body.apellido;
            objetoUser.direccion = req.body.direccion;
            objetoUser.telefono = req.body.telefono;
            objetoUser.edad = req.body.edad;
            objetoUser.mail = req.body.mail;
            objetoUser.contraseña = req.body.contraseña;

            objetoUser.save((err, section) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(200)
                        .json(section);
                }
            });
        });
};


const userDelete = (req, res) =>{
    const id = req.params.userid
    if(id) {
        Users
            .findByIdAndDelete(id)
            .exec((err, objetoUser) => {
                if(err){
                    return res
                        .status(404)
                        .json(err);
                } 
                return res
                    .status(204)
                    .json(null);
            });
    } 
    else {
        return res
            .status(404)
            .json({"Mensaje": "User no encontrado"});
    }
};


module.exports= {
    userCreate,
    userList,
    userRead,
    userUpdate,
    userDelete
}; 