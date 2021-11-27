const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;


/* GET products page. */

/* renderizar los pedidos del usuario */
const renderOrders= (req, res, responseBody) => {
    res.render('userOrders', {
        title: 'Mis Pedidos',
        orders: responseBody,
    });
};

// controlador para index
const userOrders = (req, res) => {
    const userid = '61a18a4019130b5d28829907';
    const path = `/api/orders/${userid}`;
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

module.exports = {
    userOrders
};