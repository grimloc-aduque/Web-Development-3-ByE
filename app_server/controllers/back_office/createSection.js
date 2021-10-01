const createSection = (req, res) => {
    res.render('back_office/createSection', {
        title: 'Crear Seccion'
    });
};

module.exports = {
    createSection
};