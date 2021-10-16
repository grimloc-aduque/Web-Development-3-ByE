const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}


const login = (req, res) => {
    res.render('login', {
        title: 'Iniciar Sesion',
    });
};

module.exports = {
    login
}; 