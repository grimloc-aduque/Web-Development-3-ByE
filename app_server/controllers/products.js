const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}


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

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 200) {
                renderProducts(req, res, body);
            } else {
                console.log(response.statusCode);
            }
        }
    );
};


module.exports = {
    products
};