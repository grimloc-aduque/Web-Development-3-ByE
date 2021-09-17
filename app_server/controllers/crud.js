/* GET crud page. */
const crud = (req, res) => {
    res.render('crud', { 
        title: 'Actualizacion de la pagina',
        create: 'Agregar un nuevo producto ',
        read: 'Ver todos los productos',
        update: 'Actualizar productos',
        delet: 'Eliminar productos',
        
    });
};

module.exports = {
    crud
}; 