const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://desarrollo-web-3-aduque.herokuapp.com';
}


const createProduct = (req, res) => {
    res.render('back_office/createProduct', {});
};

const doCreateProduct = (req, res) => {
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}/products`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Post',
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
};

module.exports = {
    createProduct,
    doCreateProduct
}; 