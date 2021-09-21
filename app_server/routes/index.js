const express = require('express');
const router = express.Router();


const ctrlHome = require('../controllers/home');
const ctrlProducts = require('../controllers/products');
const ctrlShoppingCart = require('../controllers/shoppingCart');
const ctrlAbout = require('../controllers/about');
const ctrlCrud = require('../controllers/crud');
const ctrlLogin = require('../controllers/login');
const ctrlSignin = require('../controllers/signin');

const ctrlCreate = require('../controllers/crud_create.js');
const ctrlRead = require('../controllers/crud_read.js');
const ctrlUpdate = require('../controllers/crud_update.js');
const ctrlDelete = require('../controllers/crud_delete.js');

// Pages
router.get('/', ctrlHome.home);
router.get('/products', ctrlProducts.products);
router.get('/shoppingCart', ctrlShoppingCart.shoppingCart);
router.get('/about', ctrlAbout.about);
router.get('/crud', ctrlCrud.crud);
router.get('/login', ctrlLogin.login);
router.get('/signin', ctrlSignin.signin);

router.get('/crud/create', ctrlCreate.create);
router.get('/crud/read', ctrlRead.read);
router.get('/crud/update', ctrlUpdate.update);
router.get('/crud/delete', ctrlDelete.deletes);



module.exports = router;
