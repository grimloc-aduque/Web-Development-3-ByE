const mongoose = require('mongoose'); 

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
    created: {
        type: Date,
        'default': Date.now()
    }
});

const sectionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: [productsSchema]
});

const Product = new mongoose.model('Product', productsSchema);
const Section = new mongoose.model('Section', sectionsSchema);





// Crear un producto y una seccion

const product1 = new Product({
    image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
    name: 'Ositos Escandalosos',
    price: 9.99,
    description: 'Descripcion del producto 1'
});

const section1 = new Section({
    title: 'Peluches',
    description: 'Los mas lindos peluches de crochet',
    products: [{
        image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
        name: 'Ositos Escandalosos',
        price: 9.99,
        description: 'Descripcion del producto 1'
    }]
});

// section1.save();
// product1.save();