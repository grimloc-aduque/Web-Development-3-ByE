const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;
const axios = require('axios');

// Renderiza el formulario para finalizar la compra
const renderCheckout = (req, res, objetoBody) => {
    // console.log(JSON.parse(req.body.productos))
    res.render('checkout', {
        title: 'Checkout',
        mensaje:'Ingrese un dato valido en el campo',
        fullname: objetoBody.nombre + " " + objetoBody.apellido,
        email: objetoBody.mail,
        telefono: objetoBody.telefono,
        productos: JSON.parse(req.body.productos),
        total: req.body.total
    });
};


// POST - Llama a API Read User
const checkout = (req, res) => {
    // const userid = req.params.userid;
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Get'
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => renderCheckout(req, res, body),
        'No se pudo acceder a la informacion del usuario'
    );
};


// POST - Llama a API Create Order
const doCheckout = (req, res) => {
    // Transformo de texto a objeto json
    req.body.carrito = JSON.parse(req.body.productos);
    const carrito = req.body.carrito;
    req.body.productos = [];
    
    // Extraigo la informacion de productos necesaria para el pedido
    for(let i=0; i<carrito.length; i++){
        req.body.productos[i] = {
            'nombre': carrito[i].nombre,
            'cantidad': carrito[i].cantidad
        }
    }

    const path = `/api/orders`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Post',
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 201,
        () => vaciarCarrito(req, res),
        'No se pudo finalizar la compra'
    );
    // sendMessage();
};



const vaciarCarrito = (req, res) => {
    const userid = '61634a5d7e30bbff4f797756'; 
    const path = `/api/users/${userid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'PUT',
        data: {
            carrito: []
        }
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        () => actualizarStock(req, res),
        'No se pudo vaciar el Carrito'
    );
};


const actualizarStock = (req, res) => {
    const carrito = req.body.carrito
    for(let i=0; i<carrito.length; i++){
        const sectionid = carrito[i].sectionid;
        const productid = carrito[i]._id;
        const path = `/api/sections/${sectionid}/products/${productid}`;  
        const requestOptions = {
            url: `${apiOptions.server}${path}`,
            method: 'Put',
            data: {
                restock: true,
                cantidad: req.body.productos[i].cantidad
            }
        };
    
        axios(requestOptions);
    }
    res.redirect('/');
};



// Enviar mensaje a WhatsApp de confimación
const sendMessage = (telefono) => {
    const accountSid = 'AC79422481801ca2a6c30a391b28300c18'; 
    const authToken = 'f152f2b537ff773e4018eb258e966dcb'; 
    const client = require('twilio')(accountSid, authToken); 
     
    client.messages 
          .create({ 
             body: 'Hola Melaa', 
             from: 'whatsapp:+14155238886',       
             to: 'whatsapp:+593999901792' 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
};


module.exports = {
    checkout,
    doCheckout
}; 