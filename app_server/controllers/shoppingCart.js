const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}


/* Show shopping cart */

// Renderiza el carrito de compras
const renderShoppingCart = (req, res, responseBody) => {
    res.render('shoppingCart', {
        titulo: 'Productos guardados en el carrito',
        productos: responseBody.products,
        total: responseBody.total
    });
};


// GET - Llamada a API Read Shopping Cart
// Luego llama a retrieveProducts para llenar la vista
const shoppingCart = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}/shoppingCart`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    //
    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 200) {
                readAllProducts(req, res, body);
            } else {
                console.log(response.statusCode);
            }
        }
    );

};

// Llamada a API Read Product con cada producto del carrito
const readAllProducts = (req, res, shoppingCart) => {
    let products = [];
    let total = 0;
    for(let i=0; i<shoppingCart.length; i++){
        // prod contiene la informacion del producto en el carrito
        const prod = shoppingCart[i];
        const path = `/api/sections/${prod.sectionid}/products/${prod.productid}`; 
        const requestOptions = {
            url: `${apiOptions.server}${path}`,
            method: 'GET',
            json: {}
        };
        request(
            requestOptions,
            (err, response, body) => { 
                // body contiene la informacion del documento del producto
                if(err) {
                    console.log(err);
                } else if(response.statusCode === 200) {
                    // Junto toda la informacion que necesito del producto
                    body.cantidad = prod.cantidad;
                    body.sectionid = prod.sectionid;
                    products.push(body)
                    // Recalculo el total
                    total += body.precio * prod.cantidad;
                }
                // Renderizo shoppingCart al recibir el ultimo producto
                if(i==shoppingCart.length - 1){
                    let responseBody = {
                        'total': total.toFixed(2),
                        'products': products
                    };
                    renderShoppingCart(req, res, responseBody);
                }
            }
        );
    }
}



/* Add product */
// POST - Llamada a API Shopping Cart Add Product
const doAddProduct = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}/shoppingCart`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        json: req.body
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(response.statusCode === 201) {
                res.redirect('/products');
            }else{
                res.render('error', {
                    msg: 'No se pudo agregar el Producto al Carrito',
                })
            }
        }
    );
};

/* Edit Product */
// POST - Llamada a API Update Product
const doEditProduct = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}/shoppingCart`;
    console.log(req.body);
    
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
            } else if(response.statusCode === 201) {
                res.redirect('/shoppingCart');
            } else {
                res.render('error', {
                    msg: 'No se pudo cambiar la cantidad del producto'
                });
            }
        }
    );
}


/* Remove Product */
// POST - Llamada a API Shopping Cart Remove Product
const doRemoveProduct = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756';
    const path = `/api/users/${userid}/shoppingCart`;

    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Delete',
        json: req.body
    };
    
    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 204) {
                res.redirect('/shoppingCart');
            } else {
                res.render('error', {
                    msg: 'No se pudo eliminar el Producto del Carrito'
                });
            }
        }
    );
}



module.exports = {
    shoppingCart,
    doAddProduct,
    doEditProduct,
    doRemoveProduct
};  