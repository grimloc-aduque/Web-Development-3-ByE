const mongoose = require('mongoose'); 
const Products = require('./esquema_products')

// Esquema de secciones
const sectionsSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    productos: {
        type: [Products.productsSchema],
        default: []
    }
});


// Inicializo algunas instancias en la DB

// Creo productos
const product1 = {
    urlImagen: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
    nombre: 'Ositos Escandalosos',
    precio: 9.99,
    stock: 5,
    descripcion: 'Descripcion del producto 1'
};

const product2 = {
    urlImagen: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154376200_375494010148442_1328147626249077422_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeERF5w1RTXQIPCxIfbdgTuiJgn4etPZWfUmCfh609lZ9Zn4w6B-7zXKJR9M-bALnMFoVTmFp8DCxfwDQp1OHWAK&_nc_ohc=P8Y5rjO9oiMAX8jGBxp&_nc_ht=scontent.fuio1-2.fna&oh=d13f587acb76108ba8d62f60b186b489&oe=616A0C03',
    nombre: 'Perrito Boink',
    precio: 19.99,
    descripcion: 'Descripcion del producto 2'
};


const Section = new mongoose.model('Section', sectionsSchema);

// Creo secciones
const section1 = new Section({
    titulo: 'Peluches',
    descripcion: 'Los mas lindos peluches de crochet',
    productos: [product1, product2]
});

const section2 = new Section({
    titulo: 'SkinCare',
    descripcion: 'Los mejores productos para tu piel'
})

// section1.save();
// section2.save();