const request = require('request');

/* Interfaz para realizar request a la API de forma estandarizada */

// Define las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}

// Dependiendo del succesCode ejecuta onSuccess o muestra una pantalla de error
// Puede recibir un onFailMsg para mostrar dentro de la pantalla de error.
const standardRequest = (res, requestOptions, succesCode, onSuccess, onFailMsg) => {
    request(
        requestOptions,
        (err, response, body) => { 
            if(response.statusCode === succesCode) {
                onSuccess(body);
            }else{
                if(!onFailMsg)
                    onFailMsg = err;
                res.render('error', {
                    msg: onFailMsg,
                })
            }
        }
    );
}


module.exports = {
    apiOptions,
    standardRequest
}