const deletes = (req, res) => {
    res.render('crud_delete', {
        title: 'Eliminar productos',
    });
};

module.exports = {
    deletes
}; 