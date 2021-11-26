const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (req, res) => {
    if(!req.body.nombre || !req.body.email || !req.body.contraseña ||
       !req.body.apellido || !req.body.telefono || !req.body.edad){
        return res
                .status(400)
                .json({message: 'Se requieren todos los campos'})
    }
    const user = new User()
    user.nombre = req.body.nombre;
    user.apellido = req.body.apellido;
    user.telefono = req.body.telefono;
    user.edad = req.body.edad;
    user.email = req.body.email;
    user.setPassword(req.body.contraseña);
    user.save((err) => {
        if(err){
            res
                .status(400)
                .json(err);
        } 
        else{
            const token = user.generateJwt();
            res
                .status(200)
                .json({token});
        }
    });
};

const login = (req, res) => {
    console.log(req.body)
    if(!req.body.email || !req.body.contraseña){
        return res
                .status(400)
                .json({message: 'Se requieren todos los campos'})
    }
    passport.authenticate('local', (err, user, info) => {
        let token;
        if(err){
            return res
                    .status(400)
                    .json(err);
        }
        if(user){
            token = user.generateJwt();
            res
                .status(200)
                .json({token});
        }else{
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};


module.exports = {
    register,
    login
};