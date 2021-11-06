const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;
const axios = require("axios").default;

//muestra formulario
const addUser = (req, res) => {
    res.render('signin', {
        title: 'Crear una cuenta'
    });
};


//llama a la rest api 
const doAddUser = (req, res) => {
    axios
    .post(`${apiOptions.server}/api/users`, {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        mail: req.body.mail,
        telefono: req.body.telefono,
        edad: req.body.edad,
        contraseña: req.body.contraseña,
    })
    .then(function (response) {
    //   console.log("Creado");
        res.redirect(`/login`);
    })
    .catch(function (error) {
        console.log(error.response);
    });
};



module.exports = {
    addUser,
    doAddUser
}; 
