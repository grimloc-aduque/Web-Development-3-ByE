const mongoose = require('mongoose');
const Users = mongoose.model('User');


//controladores 

const userCreate = (req, res) =>{
    res
        .status(200)
        .json({"status": "Success Create"});
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
    res
        .status(200)
        .json({"status": "Success Update"});
};

const userDelete = (req, res) =>{
    res
        .status(200)
        .json({"status": "Success Delete"});
};

module.exports= {
    userCreate,
    userList,
    userRead,
    userUpdate,
    userDelete
   
}; 