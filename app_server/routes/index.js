const express = require('express');
const router = express.Router();


const ctrlHome = require('../controllers/home');
const ctrlProducts = require('../controllers/products');
const ctrlAbout = require('../controllers/about');
const ctrlCrud = require('../controllers/crud');

// Pages
router.get('/', ctrlHome.home);
router.get('/products', ctrlProducts.products);  
router.get('/about', ctrlAbout.about);
router.get('/crud', ctrlCrud.crud);



module.exports = router;
