/* GET products page. */
const products = (req, res) => {
    res.render('products', { 
        title: 'Products',
        productsSection: {
            title: 'Products',
            description: 'Welcome to Products',
        },
        'products': [{
                image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
                name: 'Product 1',
                price: '$9.99',
                description: 'Descripcion del producto 1'
            },{
                image_url: 'https://scontent.fgye1-1.fna.fbcdn.net/v/t1.6435-9/164686255_398313184533191_4965315563971527458_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEdKgn9W_jElSqtdF68t3aXTspl4971xxpOymXj3vXHGgtC7gep9RlBxJmr7nMt8HERuaFjfHJyuQkWP109onUV&_nc_ohc=bujiqjxrJjcAX_FGXSA&_nc_ht=scontent.fgye1-1.fna&oh=20d612ef9019e77bcd916772de37cb5d&oe=6163F402',
                name: 'Product 2',
                price: '$9.99',
                description: 'Descripcion del producto 2'
            },{
                image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/163593612_398313217866521_1772126609911041126_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeELev96qDKN9kACPrRhTI2nkfIFLllGF7uR8gUuWUYXuw7Fi9w2nYn-gOOa265IenThQFlIarnezTjwo0s4cLGV&_nc_ohc=NcRYqd_TpYsAX9-Cful&_nc_ht=scontent.fgye1-2.fna&oh=4757ece36aaa08cf331d408fc076d9a3&oe=61642F7D',
                name: 'Product 3',
                price: '$9.99',
                description: 'Descripcion del producto 3'
            },{
                image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/163151354_398313317866511_4850718753153498483_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFIBEntt7vDfZpR7_BUaiIYqaNPub_prwSpo0-5v-mvBGWUglr-GC06PS9pyvUQ3WjE56Z1z5Ixp9_qgJ6tDZIs&_nc_ohc=iiFgOm_1QMYAX_fJwOl&_nc_ht=scontent.fgye1-2.fna&oh=a870b7a97de915c4928a0cde0f69ca97&oe=6162A31E',
                name: 'Product 4',
                price: '$9.99',
                description: 'Descripcion del producto 4'
            },
        ]
        
    });
};

module.exports = {
    products
};