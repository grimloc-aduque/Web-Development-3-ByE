const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://desarrollo-web-3-aduque.herokuapp.com';
}


const createSection = (req, res) => {
    res.render('back_office/createSection', {});
};


const doCreateSection = (req, res) => {
    // console.log("doCreateSection");
    const path = `/api/sections`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Post',
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
    createSection,
    doCreateSection
};