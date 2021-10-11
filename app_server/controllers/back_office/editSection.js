const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://desarrollo-web-3-aduque.herokuapp.com';
}


const renderEditSection = (req, res, responseBody) => {
    res.render('back_office/editSection', {
        seccion: responseBody
     });
};

// GET
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
                console.log(response.statusCode);
            }
        }
    );
};


// POST
const doEditSection = (req, res) => {
    // console.log("doEditSection");
    const sectionid = req.params.sectionid;
    const path = `/api/sections/${sectionid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Put',
        json: {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion
        }
    };

    request(
        requestOptions,
        (err, response, body) => { 
            if(err) {
                console.log(err);
            } else if(response.statusCode !== 201) {
                console.log(response.statusCode);
            } 
        }
    );

    // Redirecciono de regreso
    res.redirect('/manageStore');
};

module.exports = {
    editSection,
    doEditSection
};