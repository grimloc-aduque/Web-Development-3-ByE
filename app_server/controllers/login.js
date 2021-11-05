const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;
const axios = require("axios");


/* renderizar home page. */
const login = (req, res, ) => {
    res.render('login', {
        title: 'Iniciar Sesion',
        mensaje: ''
    });
};


// controlador para index
const doLogin = (req, res) => {
  // Temporal hasta llegar a autenticacion de usuarios
    res.redirect('/')
    /*
    axios
      .post(`${apiOptions.server}/api/login`, {
        mail: req.body.mail,
        contraseña: req.body.contraseña,
      })
      .then(function (response) {
        console.log("Inicio sesion");
      })
      .catch(function (error) {
        console.log(error.response);
        res.redirect(`/login`);
      });
    */
  };

module.exports = {
    login,
    doLogin
}; 
