const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://desarrollo-web-3-aduque.herokuapp.com';
}


/* GET products page. */
const renderShoppingCart = (req, res, responseBody) => {
    res.render('shoppingCart', {
        titulo: 'Productos guardados en el carrito',
        productos: responseBody.products,
        total: responseBody.total
    });
};


// Controlador para index
const shoppingCart = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}/shoppingCart`;
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
                retrieveProducts(req, res, body);
            } else {
                console.log(response.statusCode);
            }
        }
    );

};

const retrieveProducts = (req, res, shoppingCart) => {
    // const userid = req.params.userid;
    let products = [];
    let total = 0;
    // Busco la informacion de productos a traves del id
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
                    // Agrego la informacion del producto
                    body.cantidad = prod.cantidad;
                    products.push(body)
                    // Recalculo el total
                    total += body.precio * prod.cantidad;
                } else {
                    console.log(response.statusCode);
                    // Si no encuentra el producto es que fue eliminado del stock
                    // Procedo a eliminar el producto del carrito
                    removeProduct(req, res, body);
                }
                // Renderizo la pagina al recibir el utlimo producto
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
    return products;
}


const removeProduct = (req, res, prod) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}/shoppingCart/${prod._id}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'DELETE',
        json: {} // Que va aqui?
    };
    /*
    request(
        requestOptions,
        (err, response, body) => { 

        }
    );  
    */  
}



module.exports = {
    shoppingCart
};  