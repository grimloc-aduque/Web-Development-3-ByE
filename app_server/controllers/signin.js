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
    const path = '/api/register';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => res.redirect('/login'),
        'Existe un error en la coleccion de Usuarios'
    );
};



module.exports = {
    addUser,
    doAddUser
}; 
