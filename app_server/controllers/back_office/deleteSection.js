const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://desarrollo-web-3-aduque.herokuapp.com';
}


const deleteSection = (req, res) => {
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
            } else if(response.statusCode !== 204) {
                console.log(response.statusCode);
            } 
        }
    );

    // Redirecciono de regreso
    res.redirect('/manageStore');
};

module.exports = {
    deleteSection
};