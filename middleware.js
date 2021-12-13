const jwt = require('jsonwebtoken');

// Sesiones
// Manejo de middleware
const jwtCookie = (req, res, next) => {
    if(req.cookies.payload){
        // console.log(req.cookies.payload.token)
        // console.log(process.env.JWT_SECRET)
        jwt.verify(req.cookies.payload.token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.render('error', {
                    msg: 'No se pudo validar su sesión'
                });
            }else{
                // console.log(decoded);
                req.body.userid = decoded._id;
                res.locals.auth = true;
                res.locals.admin = decoded.admin;
                next();
            }
        });
    }else{
        next();
    }
}

const auth = (req, res, next) => {
    if(res.locals.auth){
        next();
    }else{
        res.render('error', {
            msg: 'Inicie sesión para ver esta página',
            askLogin: true
        })
    }
}

const admin = (req, res, next) => {
    if(res.locals.auth && res.locals.admin){
        next();
    }else{
        res.render('error', {
            msg: 'No es administrador de la página',
            askLogin: false
        });
    }
}

module.exports = {
    jwtCookie,
    auth,
    admin
}