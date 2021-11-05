const requestAPI = require('../requestAPI');
const apiOptions = requestAPI.apiOptions;


/* Create Section */

// GET - Renderiza createSection Form
const createSection = (req, res) => {
    res.render('back_office/createSection', {});
};

// POST - Llamada a API Create Section
const doCreateSection = (req, res) => {
    const path = `/api/sections`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Post',
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 201,
        () => res.redirect('/manageStore'),
        'No se pudo crear la Seccion'
    );
};



/* Edit Section */

// Renderiza editSection Form
const renderEditSection = (req, res, responseBody) => {
    res.render('back_office/editSection', {
        seccion: responseBody
     });
};

// GET - Llamada a API Read Section para llenar la vista
const editSection = (req, res) => {
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET'
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        (body) => renderEditSection(req, res, body),
        'Existe un error en la coleccion de Secciones'
    );
};


// POST - Llamada a API Update Section
const doEditSection = (req, res) => {
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        data: req.body
    };

    requestAPI.standardAxios(res, requestOptions, 200,
        () => res.redirect('/manageStore'),
        'No se pudo editar la seccion'
    );
};


/* Delete Section */

// POST - Llamada a API Delete Section
const doDeleteSection = (req, res) => {
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Delete',
        data: {
            sectionid: sectionid
        }
    };

    requestAPI.standardAxios(res, requestOptions, 204,
        () => res.redirect('/manageStore'),
        'No se pudo eliminar la seccion'
    );
};



module.exports = {
    createSection,
    doCreateSection,
    editSection,
    doEditSection,
    doDeleteSection
};