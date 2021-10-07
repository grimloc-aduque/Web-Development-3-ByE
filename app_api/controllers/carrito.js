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

            const carrito = objetoUsuario.carrito;
            const sectionid = req.body.sectionid;
            const productid = req.body.productid;
            const cantidad = req.body.cantidad;

            // Evaluo si debo agregar o actualizar el producto
            // Busco la seccion
            let sectionExist = false;
            let sectionInd = 0;
            carrito.secciones.every( sec => {
                if(sec.sectionid === sectionid){
                    sectionExist = true;
                    return false;
                }  
                sectionInd += 1;
                return true;
            })

            // Si ya existe la seccion paso a buscar que exista el producto
            let productExist = false;
            let productInd = 0;
            if(sectionExist){
                const productos = carrito.secciones[sectionInd].productos;
                productos.every( prod => {
                    if(prod.productid === productid){
                        productExist = true;
                        return false;
                    }
                    productInd += 1;
                    return true;
                })

                // Si existe el producto lo actualizo
                if(productExist){
                    const newProduct = {
                        'productid': productid,
                        'cantidad': cantidad
                    }
                    objetoUsuario.carrito.secciones[sectionInd]
                        .productos[productInd] = newProduct;

                }
                // Si no existe el producto lo agrego
                else {
                    const newProduct = {'productid': productid}
                    objetoUsuario.carrito.secciones[sectionInd]
                        .productos.push(newProduct);
                }
            }
            // Si no existe la seccion, creo la seccion y agrego el producto
            else{
                const newProduct = {'productid': productid}
                const newSection = {
                    'sectionid': sectionid,
                    'productos': [newProduct]
                }
                objetoUsuario.carrito.secciones.push(newSection);
            }


            objetoUsuario.save((err, usuario) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(200)
                        .json(objetoUsuario.carrito);
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
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            }
    
            const carrito = objetoUsuario.carrito;
            const sectionid = req.body.sectionid;
            const productid = req.body.productid;
    
            // Busco la seccion
            let sectionExist = false;
            let sectionInd = 0;
            carrito.secciones.every( sec => {
                if(sec.sectionid === sectionid){
                    sectionExist = true;
                    return false;
                }
                sectionInd += 1;
                return true;
            })
    
            // Si ya existe la seccion paso a buscar que exista el producto
            let productExist = false;
            let productInd = 0;
            if(sectionExist){
                const productos = carrito.secciones[sectionInd].productos;
                productos.every( prod => {
                    if(prod.productid === productid){
                        productExist = true;
                        return false;
                    }
                    productInd += 1;
                    return true;
                })
    
                // Si existe el producto lo elimino
                if(productExist){
                    objetoUsuario.carrito.secciones[sectionInd]
                        .productos.splice(productInd, 1)
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
                                .json(objetoUsuario.carrito);
                        }
                    });
                }

                // Si no existe el producto respondo un error
                else {
                    return res  
                        .status(404)
                        .json({"Mensaje": "No se encontro el producto"});
                }
            }
            // Si no existe la seccion respondo un error
            else{
                return res  
                    .status(404)
                    .json({"Mensaje": "No se encontro la seccion"});
            }
        });
}



module.exports = {
    carritoRead,
    carritoAddProduct,
    carritoRemoveProduct
}; 




