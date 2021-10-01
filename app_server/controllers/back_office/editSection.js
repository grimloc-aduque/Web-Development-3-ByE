const editSection = (req, res) => {
    res.render('back_office/editSection', {
        title: 'Editar Seccion'
    });
};

module.exports = {
    editSection
};