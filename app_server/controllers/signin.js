const request = require('request');

// Definir las URLs para los ambientes de desarrollo y produccion
const apiOptions = {
    server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://bye-bonitos-y-esponjositos.herokuapp.com';
}


//muestra formulario
const addUsers = (req, res) => {
    res.render('signin', {
        title: 'Crear una cuenta'
    });
};

//llama a la rest api 
const doAddUsers = (req, res) => {
    const path = '/api/users/';
    const postdata = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        mail: req.body.mail,
        telefono: req.body.telefono,
        edad: req.body.edad,
        contraseña: req.body.contraseña,

    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'Post',
        json: postdata
    };

    request(
        requestOptions, 
        (err, response, body) => { 
             if (response.statusCode === 201 ) {
                res.redirect('/')
            } else {
                res.render( 'error', {
                    msg:'No se pudo crear el nuevo usuario'
                });
            }
        });
};


module.exports = {
    addUsers,
    doAddUsers
}; 
