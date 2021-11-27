const axios = require('axios');
const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;


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
    const userid = '61a18a4019130b5d28829907'; 
    const path = `/api/users/${userid}/shoppingCart`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET'
    };
    
    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => readAllProducts(req, res, body), 
        'Existe un error en la coleccion de Usuarios'
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
        axios(requestOptions)
            .then( response => {
                // Uno toda la informacion que necesito del producto
                response.data.cantidad = prod.cantidad;
                response.data.sectionid = prod.sectionid;
                products.push(response.data)
                // Recalculo el total
                total += response.data.precio * prod.cantidad;
            })
            .catch(error => {
                console.log(error.response.status);
            })
    }
    // Espero a recibir el ultimo producto
    setTimeout(()=>{
        // Renderizo shoppingCart al recibir el ultimo producto
        let responseBody = {
            'total': total.toFixed(2),
            'products': products
        };
        renderShoppingCart(req, res, responseBody);
    },350);
}


/* Add product */

// POST - Llamada a API Shopping Cart Add Product
const doAddProduct = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61a18a4019130b5d28829907'; 
    const path = `/api/users/${userid}/shoppingCart`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'PUT',
        data: req.body
    };
    console.log(requestOptions)
    requestAPI.standardAxios(res, requestOptions, 201,
        () => res.redirect('/products'),
        'No se pudo agregar el producto al carrito'
    );
};



/* Edit Product */

// POST - Llamada a API Update Product
const doEditProduct = (req, res) => {
    // const userid = req.params.userid;
    
    const userid = '61a18a4019130b5d28829907'; 
    const path = `/api/users/${userid}/shoppingCart`;
    
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 201,
        () => res.redirect('/shoppingCart'),
        'No se pudo cambiar la cantidad del producto'
    );
}


/* Remove Product */

// POST - Llamada a API Shopping Cart Remove Product
const doRemoveProduct = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61a18a4019130b5d28829907';
    const path = `/api/users/${userid}/shoppingCart`;

    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Delete',
        data: req.body
    };
    
    requestAPI.standardAxios(res, requestOptions, 204,
        () => res.redirect('/shoppingCart'),
        'No se pudo eliminar el Producto del Carrito'
    );
}



module.exports = {
    shoppingCart,
    doAddProduct,
    doEditProduct,
    doRemoveProduct,
};  