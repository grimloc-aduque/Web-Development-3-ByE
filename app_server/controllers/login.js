const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;
const axios = require("axios");


const login = (req, res, ) => {
    res.render('login', {
        title: 'Iniciar Sesion',
        mensaje: ''
    });
};


const doLogin = (req, res) => {
    const path = '/api/login';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => res.redirect('/'),
        'Usuario o contraseña incorrecta'
    );
};

module.exports = {
    login,
    doLogin
}; 
