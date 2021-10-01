const express = require('express');
const router = express.Router();

// Traigo los controladores
const ctrlHome = require('../controllers/home');
const ctrlProducts = require('../controllers/products');
const ctrlAbout = require('../controllers/about');

const ctrlShoppingCart = require('../controllers/shoppingCart');
const ctrlCheckout = require('../controllers/checkout');

const ctrlLogin = require('../controllers/login');
const ctrlSignin = require('../controllers/signin');

const ctrlManageSections = require('../controllers/back_office/manageSections')
const ctrlCreateSection = require('../controllers/back_office/createSection')
const ctrlEditSection = require('../controllers/back_office/editSection')

const ctrlManageProducts = require('../controllers/back_office/manageProducts')
const ctrlCreateProduct = require('../controllers/back_office/createProduct')
const ctrlEditProduct = require('../controllers/back_office/editProduct')


const ctrlCrud = require('../controllers/crud');
const ctrlCreate = require('../controllers/crud_create.js');
const ctrlUpdate = require('../controllers/crud_update.js');


// Direccionammiento de rutas

// Mostrar contenido
router.get('/', ctrlHome.home);
router.get('/products', ctrlProducts.products);
router.get('/about', ctrlAbout.about);

// Carrito y finalizacion de compra del usuario
router.get('/shoppingCart', ctrlShoppingCart.shoppingCart);
router.get('/checkout', ctrlCheckout.checkout);

// Creacion e inicio de sesion
router.get('/login', ctrlLogin.login);
router.get('/signin', ctrlSignin.signin);

// Back Office
router.get('/crud', ctrlCrud.crud);
router.get('/crud/create', ctrlCreate.create);
router.get('/crud/update', ctrlUpdate.update);

// Back Office
/*
router.get('/manageSections', ctrlManageSections.manageSections);
router.get('/manageSections/createSection', ctrlCreateSection.createSection);
router.get('/manageSections/editSection', ctrlEditSection.editSection);

router.get('/manageProducts', ctrlManageProducts.manageProducts);
router.get('/manageProducts/createProduct', ctrlCreateProduct.createProduct);
router.get('/manageProducts/editProduct', ctrlEditProduct.editProduct);
*/

module.exports = router;
