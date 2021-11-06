// const request = require('request');
const axios = require('axios');

/* Interfaz para realizar request a la API de forma estandarizada */

// Define las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}

/*
const standardRequest = (res, requestOptions, succesCode, onSuccess, onFailMsg) => {
    request(
        requestOptions,
        (err, response, body) => { 
            if(response.statusCode === succesCode) {
                onSuccess(body);
            }
            else{
                if(!onFailMsg)
                    onFailMsg = err;
                res.render('error', {
                    msg: onFailMsg,
                })
            }
        }
    );
}
*/

// Dependiendo del succesCode ejecuta onSuccess o muestra una pantalla de error
// Puede recibir un onFailMsg para mostrar dentro de la pantalla de error.
const standardAxios = (res, requestOptions, succesCode, onSuccess, onFailMsg) => {
    succesCodes = {'post': 200, 'get':200, 'put':201, 'delete':204};
    axios(requestOptions)
        .then( response => {
            // Verifica que el statusCode de la respuesta sea el correcto
            if(response.status === succesCode) {
                onSuccess(response.data);
            }
            else{
                console.log(response.status)
                res.render('error', {
                    msg: onFailMsg
                })
            }
        })
        .catch( error => {
            console.log(error.response.status)
            if(onFailMsg){
                res.render('error', {
                    msg: onFailMsg
                })
            }
            else{
                res.render('error', {
                    error: error
                })
            }
        });
}



module.exports = {
    apiOptions,
    // standardRequest,
    standardAxios
}