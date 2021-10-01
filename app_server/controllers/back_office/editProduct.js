const editProduct = (req, res) => {
    res.render('back_office/editProduct', {
        title: 'Editar producto',
        nombre: 'Nombre del producto',
        precio: 'Precio del producto',
        descripcion: 'Descripcion del producto',
        actualizar: 'Actualizar',
        editar: 'Editar imagen',
        imagen: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
        
        'Categorias': [{
            opcion: 'Seleccione una categoria'
        },{
            opcion: 'Peluches'
        },{
            opcion: 'Skincare'
        },{
            opcion: 'Golosinas'
        }],
    
    });
};

module.exports = {
    editProduct
}; 