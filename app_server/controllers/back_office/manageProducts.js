const requestAPI = require('../requestAPI');
const apiOptions = requestAPI.apiOptions;


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
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 201, 
        () => res.redirect('/manageStore'), 
        'No se pudo crear el Producto'
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
        method: 'GET'
    };

    requestAPI.standardAxios(res, requestOptions, 200, 
        (body) => renderEditProduct(req, res, body), 
        'Existe un error en la coleccion de Productos'
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
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 200, 
        () => res.redirect('/manageStore'), 
        'No se pudo editar el producto'
    );
}



/* Delete Product */

// POST - Llamada a API Delete Product
const doDeleteProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;
    const path = `/api/sections/${sectionid}/products/${productid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Delete',
        data: {
            sectionid: sectionid,
            productid: productid
        }
    };
    
    requestAPI.standardAxios(res, requestOptions, 204, 
        () => res.redirect('/manageStore'), 
        'No se pudo eliminar el producto'
    );
};



module.exports = {
    createProduct,
    doCreateProduct,
    editProduct,
    doEditProduct,
    doDeleteProduct,
}; 