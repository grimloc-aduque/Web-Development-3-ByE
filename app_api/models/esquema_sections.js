const mongoose = require('mongoose'); 
const Products = require('./esquema_products')

// Esquema de secciones
const sectionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: [Products.productsSchema]
});


const Section = new mongoose.model('Section', sectionsSchema);


// Crear una seccion
const section1 = new Section({
    title: 'Peluches',
    description: 'Los mas lindos peluches de crochet',
    products: [Products.product1, Products.product2]
});

const section2 = new Section({
    title: 'SkinCare',
    description: 'Los mejores productos para tu piel'
})

// section1.save();
// section2.save();