const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}


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
        json: req.body
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(response.statusCode === 201) {
                res.redirect('/manageStore');
            }else{
                res.render('error', {
                    msg: 'No se pudo crear la Seccion',
                })
            }
        }
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
        method: 'GET',
        json: {}
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 200) {
                renderEditSection(req, res, body);
            } else {
                res.render('error', {
                    msg: 'Existe un error en la coleccion de Secciones'
                });
            }
        }
    );
};


// POST - Llamada a API Update Section
const doEditSection = (req, res) => {
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        json: req.body
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 200) {
                res.redirect('/manageStore');
            } else {
                res.render('error', {
                    msg: 'No se pudo editar la seccion'
                });
            }
        }
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
        json: {
            sectionid: sectionid
        }
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode === 204) {
                res.redirect('/manageStore');
            } else {
                res.render('error', {
                    msg: 'No se pudo eliminar la seccion'
                });
            }
        }
    );
};



module.exports = {
    createSection,
    doCreateSection,
    editSection,
    doEditSection,
    doDeleteSection
};