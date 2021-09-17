const crear = (req, res) => {
    res.render('crear', { 
        title: 'Agrega un producto',
        name: 'Nombre del producto',
        price: 'Precio del producto',
        description: 'Descripcion del producto',
        subir_archivo: 'Subir una foto del producto',
        

       
        
    });
};

module.exports = {
    crear
}; 