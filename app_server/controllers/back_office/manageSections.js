const manageSections = (req, res) => {
    res.render('back_office/manageSections', {
        title: 'Gestionar Secciones'
    });
};

module.exports = {
    manageSections
};