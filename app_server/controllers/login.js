const login = (req, res) => {
    res.render('login', {
        title: 'Iniciar Sesion',
    });
};

module.exports = {
    login
}; 