const mongoose = require('mongoose');
const Sections = mongoose.model('Section');
const collectionName = Sections.collection.collectionName;


const sectionCreate = (req, res) => {
    Sections.create(
        {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            productos: []
        }, 
        (err, objetoSection) => {
            if(err){
                return res
                    .status(400)
                    .json(err);
            } 
            else{
                return res
                    .status(201)
                    .json(objetoSection)
            }
        }
    );
};


const sectionList = (req, res) => {
    Sections
        .find()
        .exec((err, objetoSection) => {
            if(!objetoSection) { 
                console.log(`No existen documentos en la coleccion ${collectionName}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Secciones no encontradas"
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
                .json(objetoSection);  
        });
};


const sectionRead = (req, res) => {
    const id = req.params.sectionid;
    Sections
        .findById(id) 
        .exec((err, objetoSection) => {
            if(!objetoSection){ 
                console.log(`Seccion con sectionid: ${id} no encontrada`);
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
            res
                .status(200)
                .json(objetoSection);  
        });
};


const sectionUpdate = (req, res) => {
    const id = req.params.sectionid
    if(!id){
        return res
            .status(404)
            .json({
                "message": "Ingrese un sectionid valido"
            })
    }
    Sections
        .findById(id)
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
            objetoSection.titulo = req.body.titulo;
            objetoSection.descripcion = req.body.descripcion;
            objetoSection.save((err, section) => {
                if(err) {
                    return res
                        .status(404)
                        .json(err);
                } 
                else {
                    return res
                        .status(200)
                        .json(section);
                }
            });
        })
};


const sectionDelete = (req, res) => {
    const id = req.params.sectionid
    if(id) {
        Sections
            .findByIdAndDelete(id)
            .exec((err, objetoSection) => {
                if(err){
                    return res
                        .status(404)
                        .json(err);
                } 
                return res
                    .status(204)
                    .json(null);
            });
    } 
    else {
        return res
            .status(404)
            .json({"Mensaje": "Seccion no encontrada"});
    }
};


module.exports = {
    sectionList,
    sectionCreate,
    sectionRead,
    sectionUpdate,
    sectionDelete
}; 