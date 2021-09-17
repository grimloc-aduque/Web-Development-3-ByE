const update = (req, res) => {
    res.render('crud_update', {
        title: 'Actualizar productos',
    });
};

module.exports = {
    update
}; 