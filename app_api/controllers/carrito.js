const mongoose = require('mongoose');
const User = mongoose.model('User')


const carritoRead = (req, res) => {
    const id = req.params.userid
    User
         .findById(id)
         .exec((err, objetoUsuario) => {
            if(!objetoUsuario){
                return res  
                    .status(404)
                    .json({
                        "Mensaje": "No se encontro el usuario"
                    });
            }else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            res  
                .status(200)
                .json(objetoUsuario.carrito);
         });
}



const carritoAddProduct = (req, res) => {
    const userid = req.params.userid
    
    // Verifico que se ingresaron id's validos
    if(!userid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }

    // Busco el usuario
    User
         .findById(userid)
         .exec((err, objetoUsuario) => {
            if(!objetoUsuario){
                return res  
                    .status(404)
                    .json({
                        "Mensaje": "No se encontro el usuario"
                    });
            }else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            
            // Cargo los datos del body
            const sectionid = req.body.sectionid;
            const productid = req.body.productid;
            const cantidad = req.body.cantidad;

            // Creo el nuevo producto
            const newProduct = {
                'sectionid': sectionid,
                'productid': productid,
                'cantidad': cantidad
            }

             // Busco el producto y guardo su posicion
            const carrito = objetoUsuario.carrito;
            let pInd = -1;
            for(let i = 0; i<carrito.length; i++){
                p = carrito[i]
                if(p.sectionid === sectionid && p.productid === productid){
                    pInd = i;
                    break;
                }
            }
            // Si encuentro el producto, lo actualizo
            if(pInd != -1){
                objetoUsuario.carrito[pInd] = newProduct
            }

            // Si no encuentro el producto, lo agrego
            else{
                objetoUsuario.carrito.push(newProduct);
            }

            // Guardo los cambios
            objetoUsuario.save((err, usuario) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(200)
                        .json(usuario.carrito);
                }
            });
         });
}



const carritoRemoveProduct = (req, res) => {
    const userid = req.params.userid
    
    // Verifico que se ingresaron id's validos
    if(!userid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }

    // Busco el usuario
    User
        .findById(userid)
        .exec((err, objetoUsuario) => {
            if(!objetoUsuario){
                return res  
                    .status(404)
                    .json({
                        "Mensaje": "No se encontro el usuario"
                    });
            }else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            
            // Cargo los datos del body
            const sectionid = req.body.sectionid;
            const productid = req.body.productid;

            // Busco el producto y guardo su posicion
            const carrito = objetoUsuario.carrito;
            let pInd = -1;
            for(let i = 0; i<carrito.length; i++){
                p = carrito[i]
                if(p.sectionid === sectionid && p.productid === productid){
                    pInd = i;
                    break;
                }
            }

            // Si existe el producto lo elimino
            if(pInd != -1){
                objetoUsuario.carrito.splice(pInd, 1)
                // Guardo los cambios
                objetoUsuario.save((err, usuario) => {
                    if(err) {
                        return res
                            .status(404)
                            .json(err);
                    } else {
                        return res
                            .status(200)
                            .json(usuario.carrito);
                    }
                });
            }

            // Si no existe el producto respondo un error
            else {
                return res  
                    .status(404)
                    .json({"Mensaje": "No se encontro el producto"});
            }
        });
}



module.exports = {
    carritoRead,
    carritoAddProduct,
    carritoRemoveProduct
}; 




