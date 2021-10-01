/* GET crud page. */
const crud = (req, res) => {
    res.render('crud', { 
        title: 'Gestionar Productos',
        'products': [{
            image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
            name: 'Product 1',
            description: 'Descripcion del producto 1'
        },{
            image_url: 'https://scontent.fgye1-1.fna.fbcdn.net/v/t1.6435-9/164686255_398313184533191_4965315563971527458_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEdKgn9W_jElSqtdF68t3aXTspl4971xxpOymXj3vXHGgtC7gep9RlBxJmr7nMt8HERuaFjfHJyuQkWP109onUV&_nc_ohc=bujiqjxrJjcAX_FGXSA&_nc_ht=scontent.fgye1-1.fna&oh=20d612ef9019e77bcd916772de37cb5d&oe=6163F402',
            name: 'Product 2',
           
            description: 'Descripcion del producto 2'
        }],
    
        sections: [{
            title: 'Agregar un nuevo producto ',
            route: '/crud/create'
        }]
    });
};

module.exports = {
    crud
}; 