const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;


/* GET products page. */

// Renderiza products
const renderProducts = (req, res, responseBody) => {
    res.render('products', { 
        titulo: 'Products',
        secciones: responseBody
    });
};


// GET - Llamada a API Read All Sections para llenar la vista
const products = (req, res) => {
    const path = '/api/sections';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET'
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => renderProducts(req, res, body),
        'Existe un error en la coleccion de Secciones'
    );
};


module.exports = {
    products
};