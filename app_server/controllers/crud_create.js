const create = (req, res) => {
    res.render('crud_create', { 
        title: 'Agrega un producto',
        name: 'Nombre del producto',
        price: 'Precio del producto',
        description: 'Descripcion del producto',
        subir_archivo: 'Subir una foto del producto',  
    });
};

module.exports = {
    create
}; 