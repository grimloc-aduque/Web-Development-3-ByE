const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;


/* GET products page. */
const renderProducts = (req, res, responseBody) => {
    res.render('products', { 
        titulo: 'Products',
        secciones: responseBody
    });
};


// Controlador para index
const products = (req, res) => {
    const path = '/api/sections';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    requestAPI.standardRequest(res, requestOptions, 200,
        (body) => renderProducts(req, res, body),
        'Existe un error en la coleccion de Secciones'
    );
};


module.exports = {
    products
};