const read = (req, res) => {
    res.render('crud_read', {
        title: 'Ver todos los productos',
    });
};

module.exports = {
    read
}; 