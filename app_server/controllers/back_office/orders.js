const requestAPI = require('../requestAPI');
const request = require('request');

// Definir las URLs para los ambientes de desarrollo y producción
const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com' // servidor remoto - producción
}

/* renderizar home page. */
const renderOrders= (req, res, responseBody) => {
    res.render('back_office/orders', {
        title: 'Pedidos',
        orders: responseBody,
        status: req.body.status
    });
};

// controlador para index
const orders = (req, res) => {
    const path = '/api/orders/';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET'
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => {
            let newBody = body.sort((a,b) => {
                return new Date(b.fecha) - new Date(a.fecha)
            });body
            renderOrders(req, res, newBody);
        },
        'Existe un error en la coleccion de Pedidos'
    );
};


const filterOrders = (req, res) => {
    if(req.body.status == 'Todos'){
        res.redirect('/manageStore/orders')
    }
    const path = '/api/orders/';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET'
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => {
            let newBody = body.filter(order => order.status == req.body.status)
            newBody = newBody.sort((a,b) => {
                return new Date(b.fecha) - new Date(a.fecha)
            });
            renderOrders(req, res, newBody);
        },
        'Existe un error en la coleccion de Pedidos'
    );
}


const updateStatus = (req, res) => {
    const orderid = req.body.orderid
    const path = `/api/orders/${orderid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'PUT',
        data: {
            'status': req.body.status
        }
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        () => res.redirect(`/manageStore/orders`),
        'Existe un error en la coleccion de Pedidos'
    );
}



module.exports = {
    orders,
    filterOrders,
    updateStatus
};
