const mongoose = require('mongoose');
const Orders = mongoose.model('Order');
const collectionName = Orders.collection.collectionName;


const orderCreate = (req, res) => {
    console.log(req.body)
    Orders.create(
        {
            fullname: req.body.fullname,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: {
                ciudad: req.body.ciudad,
                calle_principal: req.body.calle_principal,
                calle_secundaria: req.body.calle_secundaria,
                numero_casa: req.body.numero_casa,
                referencia: req.body.referencia
            },
            productos: req.body.productos
        }, 
        (err, objetoOrder) => {
            if(err){
                return res
                    .status(400)
                    .json(err);
            } 
            else{
                return res
                    .status(201)
                    .json(objetoOrder)
            }
        }
    );
};


const orderList = (req, res) => {
    Orders
        .find()
        .exec((err, objetoOrder) => {
            if(!objetoOrder) { 
                console.log(`No existen documentos en la coleccion ${collectionName}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Pedidos no encontrados"
                    });
            }
            else if(err) {
                console.log(`Se encontro error en la coleccion ${collectionName}`);
                return res 
                    .status(404)
                    .json(err);    
            }
            res
                .status(200)
                .json(objetoOrder);  
        });
};


const orderRead = (req, res) => {
    const id = req.params.orderid;
    Orders
        .findById(id) 
        .exec((err, objetoOrder) => {
            if(!objetoOrder){ 
                console.log(`Pedido con orderid: ${id} no encontrado`);
                return res 
                    .status(404)
                    .json({
                        "Mensaje": "Pedido no encontrado"
                    });
            }else if(err){
                return res
                    .status(404)
                    .json(err);    
            }
            res
                .status(200)
                .json(objetoOrder);
        });
};


const orderUpdate = (req, res) => {
    const id = req.params.orderid
    if(!id){
        return res
            .status(404)
            .json({
                "message": "Ingrese un orderid valido"
            })
    }
    Orders
        .findById(id)
        .exec((err, objetoOrder) =>{
            if(!objetoOrder) {
                return res
                    .status(404)
                    .jason({
                        "message": "orderid no existe"
                    });
            }
            else if(err) {
                return res
                    .status(400)
                    .jason(err);
            }

            objetoOrder.status = req.body.status;
            objetoOrder.save((err, order) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(200)
                        .json(order);
                }
            });
        })
};



module.exports = {
    orderList,
    orderCreate,
    orderRead,
    orderUpdate
}; 