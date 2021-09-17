/* GET crud page. */
const crud = (req, res) => {
    res.render('crud', { 
        title: 'Gestionar Productos',
        sections: [{
            title: 'Agregar un nuevo producto ',
            route: '/crud/create'
        },{
            title: 'Ver todos los productos',
            route: '/crud/read'
        },{
            title: 'Actualizar productos',
            route: '/crud/update' 
        },{
            title: 'Eliminar productos',
            route: '/crud/delete' 
        }]
    });
};

module.exports = {
    crud
}; 