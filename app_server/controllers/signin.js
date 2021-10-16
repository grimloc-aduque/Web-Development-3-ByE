const requestAPI = require('./requestAPI');
const apiOptions = requestAPI.apiOptions;


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

    requestAPI.standardRequest(res, requestOptions, 201,
        () => res.redirect('/'),
        'No se pudo crear el nuevo usuario'
    );
};


module.exports = {
    addUsers,
    doAddUsers
}; 
