const mongoose = require('mongoose'); 

// Esquema de productos
const productsSchema = new mongoose.Schema({
    image_url:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    stock :{
        type: Number,
        required: true,
        min: 0,
        'default': 0
    },
    created: {
        type: Date,
        'default': Date.now()
    }
});

const Product = new mongoose.model('Product', productsSchema);

// Crear un producto
const product1 = new Product({
    image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
    name: 'Ositos Escandalosos',
    price: 9.99,
    stock: 5,
    description: 'Descripcion del producto 1'
});

const product2 = new Product({
    image_url: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154376200_375494010148442_1328147626249077422_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeERF5w1RTXQIPCxIfbdgTuiJgn4etPZWfUmCfh609lZ9Zn4w6B-7zXKJR9M-bALnMFoVTmFp8DCxfwDQp1OHWAK&_nc_ohc=P8Y5rjO9oiMAX8jGBxp&_nc_ht=scontent.fuio1-2.fna&oh=d13f587acb76108ba8d62f60b186b489&oe=616A0C03',
    name: 'Perrito Boink',
    price: 19.99,
    description: 'Descripcion del producto 2'
});


module.exports = {
    productsSchema,
    product1,
    product2
};