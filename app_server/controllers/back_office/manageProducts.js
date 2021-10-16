const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}



/* Create Product */

// GET - Renderiza createProduct Form
const createProduct = (req, res) => {
    res.render('back_office/createProduct', {});
};

// POST - Llamada a API Create Product
const doCreateProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}/products`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Post',
        json: req.body
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(response.statusCode === 201) {
                res.redirect('/manageStore');
            }else{
                res.render('error', {
                    msg: 'No se pudo crear el Producto',
                })
            }
        }
    );
};



/* Edit Product */

// Renderiza editProduct Form
const renderEditProduct = (req, res, responseBody) => {
    res.render('back_office/editProduct', {
        producto: responseBody
    });
};

// GET - Llamada a API Read Product para llenar la vista
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
                res.render('error', {
                    msg: 'Existe un error en la coleccion de Productos'
                });
            }
        }
    );
}

// POST - Llamada a API Update Product
const doEditProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;
    const path = `/api/sections/${sectionid}/products/${productid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        json: req.body
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 200) {
                res.redirect('/manageStore');
            } else {
                res.render('error', {
                    msg: 'No se pudo editar el producto'
                });
            }
        }
    );
}



/* Delete Product 
    // Redirecciono de regreso
    res.redirect('/manageStore');*/

// POST - Llamada a API Delete Product
const doDeleteProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;
    const path = `/api/sections/${sectionid}/products/${productid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Delete',
        json: {
            sectionid: sectionid,
            productid: productid
        }
    };
    
    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 204) {
                res.redirect('/manageStore');
            } else {
                res.render('error', {
                    msg: 'No se pudo eliminar el producto'
                });
            }
        }
    );
};



module.exports = {
    createProduct,
    doCreateProduct,
    editProduct,
    doEditProduct,
    doDeleteProduct,
}; 