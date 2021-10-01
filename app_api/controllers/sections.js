const mongoose = require('mongoose');
const Section = mongoose.model('Section');
const collectionName = Section.collection.collectionName;

const sectionCreate = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Create"});
};

const sectionList = (req, res) => {
    Section
        .find()
        .exec((err, objetoSection) => {
            if(!objetoSection  || objetoSection.length == 0){ 
                console.log(`No existen documentos en la coleccion ${collectionName}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Secciones no encontradas"
                    });
            }else if(err){
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
    Section
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
    res
        .status(200)
        .json({"status": "Success Update"});
};

const sectionDelete = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Delete"});
};





module.exports = {
    sectionList,
    sectionCreate,
    sectionRead,
    sectionUpdate,
    sectionDelete
}; 