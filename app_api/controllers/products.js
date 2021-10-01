const mongoose = require('mongoose');
const Section = mongoose.model('Section')
const Product = mongoose.model('Product');



const productCreate = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Create"});
};

const productList = (req, res) => {
    const sectionid = req.params.sectionid;
    Section
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
            const products = objetoSection.products;
            res
                .status(200)
                .json(products);  
        });
};


const productRead = (req, res) => {
    const sectionid = req.params.sectionid;
    const productid = req.params.productid;
    Section
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
            const product = objetoSection.products.id(productid);
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
    res
        .status(200)
        .json({"status": "Success Update"});
};

const productDelete = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Delete"});
};


module.exports = {
    productList,
    productCreate,
    productRead,
    productUpdate,
    productDelete
}; 