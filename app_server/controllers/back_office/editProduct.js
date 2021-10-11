const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://desarrollo-web-3-aduque.herokuapp.com';
}


const renderEditProduct = (req, res, responseBody) => {
    res.render('back_office/editProduct', {
        producto: responseBody
    });
};


const editProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;
    const path = `/api/sections/${sectionid}/products/${productid}`;
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
                renderEditProduct(req, res, body);
            } else {
                console.log(response.statusCode);
            }
        }
    );
}


const doEditProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;
    const path = `/api/sections/${sectionid}/products/${productid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        json: {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            urlImagen: req.body.urlImagen,
        }
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode !== 201) {
                console.log(response.statusCode);
            } 
        }
    );

    // Redirecciono de regreso
    res.redirect('/manageStore');
}


module.exports = {
    editProduct,
    doEditProduct
}; 