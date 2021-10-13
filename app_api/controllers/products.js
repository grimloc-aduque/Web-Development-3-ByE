const mongoose = require('mongoose');
const Sections = mongoose.model('Section')


const productCreate = (req, res) => {
    const sectionid = req.params.sectionid;

    // Verifico que se ingresaron id's validos
    if(!sectionid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }

    // Busco la seccion
    Sections
        .findById(sectionid)
        .exec((err, objetoSection) =>{
            if(!objetoSection) {
                return res
                    .status(404)
                    .jason({
                        "message": "sectionid no existe"
                    });
            }
            else if(err) {
                return res
                    .status(400)
                    .jason(err);
            }

            // Creo el nuevo producto
            const newProduct = {
                urlImagen: req.body.urlImagen,
                nombre: req.body.nombre,
                precio: req.body.precio,
                stock: req.body.stock,
                descripcion: req.body.descripcion
            };

            // Agrego el nuevo producto a la seccion
            objetoSection.productos.push(newProduct)
            objetoSection.save((err, section) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(201)
                        .json(newProduct);
                }
            });
        })
};


const productList = (req, res) => {
    const sectionid = req.params.sectionid;

    // Verifico que se ingresaron id's validos
    if(!sectionid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }

    // Busco la seccion
    Sections
        .findById(sectionid) 
        .exec((err, objetoSection) => {
            if(!objetoSection){ 
                return res 
                    .status(404)
                    .json({
                        "Mensaje": "Seccion no encontrada"
                    });
            }else if(err){
                return res
                    .status(404)
                    .json(err);    
            }

            // Envio unicamente los productos
            const productos = objetoSection.productos;
            res
                .status(200)
                .json(productos);  
        });
};


const productRead = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;

    // Verifico que se ingresaron id's validos
    if(!sectionid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }
    if(!productid){
        return res
        .status(404)
        .json({
            "message": "Ingrese un productid valido"
        }) 
    }
    
    // Busco la seccion
    Sections
        .findById(sectionid) 
        .exec((err, objetoSection) => {
            if(!objetoSection){ 
                return res 
                    .status(404)
                    .json({
                        "Mensaje": "Seccion no encontrada"
                    });
            }else if(err){
                return res
                    .status(404)
                    .json(err);    
            }

            // Busco el producto
            const product = objetoSection.productos.id(productid);
            if(!product){
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Producto no encontrado"
                    });
            }
            res
                .status(200)
                .json(product);  
        });
};


const productUpdate = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;

    // Verifico que se ingresaron id's validos
    if(!sectionid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }
    if(!productid){
        return res
        .status(404)
        .json({
            "message": "Ingrese un productid valido"
        }) 
    }

    // Busco la seccion
    Sections
        .findById(sectionid)
        .exec((err, objetoSection) =>{
            if(!objetoSection) {
                return res
                    .status(404)
                    .jason({
                        "message": "sectionid no existe"
                    });
            }
            else if(err) {
                return res
                    .status(400)
                    .jason(err);
            }
            
            // Busco el producto
            const product = objetoSection.productos.id(productid);
            if(!product){
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Producto no encontrado"
                    });
            }

            // Actualizo el producto
            product.urlImagen = req.body.urlImagen;
            product.nombre = req.body.nombre;
            product.precio = req.body.precio;
            product.stock = req.body.stock;
            product.descripcion = req.body.descripcion;

            // Guardo la seccion
            objetoSection.save((err) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(200)
                        .json(product);
                }
            });
        })
};


const productDelete = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;

    // Verifico que se ingresaron id's validos
    if(!sectionid){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }
    if(!productid){
        return res
        .status(404)
        .json({
            "message": "Ingrese un productid valido"
        }) 
    }

    // Busco la seccion
    Sections
        .findById(sectionid)
        .exec((err, objetoSection) =>{
            if(!objetoSection) {
                return res
                    .status(404)
                    .jason({
                        "message": "sectionid no existe"
                    });
            }
            else if(err) {
                return res
                    .status(400)
                    .jason(err);
            }
            
            // Elimino el producto
            objetoSection.productos.id(productid).remove();

            // Guardo la seccion
            objetoSection.save((err) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(204)
                        .json(null);
                }
            });
        })
};



module.exports = {
    productList,
    productCreate,
    productRead,
    productUpdate,
    productDelete
}; 