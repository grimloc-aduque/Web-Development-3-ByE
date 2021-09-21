const signin = (req, res) => {
    res.render('signin', {
        title: 'Crear una cuenta',
    });
};

module.exports = {
    signin
}; 