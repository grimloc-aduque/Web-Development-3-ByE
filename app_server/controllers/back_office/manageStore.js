const requestAPI = require('../requestAPI');
const apiOptions = requestAPI.apiOptions;


// Renderiza manageStore
const renderManageStore = (req, res, responseBody) => {
    res.render('back_office/manageStore', { 
        secciones: responseBody
    });
}

/* List All Sections */

// GET - Llamada a API Read All Sections para llenar la vista
const manageStore = (req, res) => {
    const path = '/api/sections';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET'
    };

    requestAPI.standardAxios(res, requestOptions, 200, 
        (body) => renderManageStore(req, res, body),
        'Existe un error en la coleccion de Secciones'
    );
};



module.exports = {
    manageStore
}; 