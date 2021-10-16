const requestAPI = require('../requestAPI');
const apiOptions = requestAPI.apiOptions;


/* GET crud page. */
const renderManageStore = (req, res, responseBody) => {
    res.render('back_office/manageStore', { 
        secciones: responseBody
    });
}


// Controlador para index
const manageStore = (req, res) => {
    const path = '/api/sections';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    requestAPI.standardRequest(res, requestOptions, 200, 
        (body) => renderManageStore(req, res, body),
        'Existe un error en la coleccion de Secciones'
    );
};



module.exports = {
    manageStore
}; 