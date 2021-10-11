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

const ctrlManageStore = require('../controllers/back_office/manageStore')

const ctrlCreateSection = require('../controllers/back_office/createSection')
const ctrlEditSection = require('../controllers/back_office/editSection')
const ctrlDeleteSection = require('../controllers/back_office/deleteSection')

const ctrlCreateProduct = require('../controllers/back_office/createProduct')
const ctrlEditProduct = require('../controllers/back_office/editProduct')
const ctrlDeleteProduct = require('../controllers/back_office/deleteProduct')


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


// ---------- Back Office
router.get('/manageStore', ctrlManageStore.manageStore);

// Secciones
router.get('/manageStore/createSection', ctrlCreateSection.createSection);

router
    .route('/manageStore/createSection')
    .get(ctrlCreateSection.createSection)
    .post(ctrlCreateSection.doCreateSection)

router
    .route('/manageStore/:sectionid/editSection')
    .get(ctrlEditSection.editSection)
    .post(ctrlEditSection.doEditSection)

router.get('/manageStore/:sectionid/deleteSection', ctrlDeleteSection.deleteSection);


// Productos
router
    .route('/manageStore/:sectionid/createProduct')
    .get(ctrlCreateProduct.createProduct)
    .post(ctrlCreateProduct.doCreateProduct);

router
    .route('/manageStore/:sectionid/:productid/editProduct')
    .get(ctrlEditProduct.editProduct)
    .post(ctrlEditProduct.doEditProduct)

router.get('/manageStore/:sectionid/:productid/deleteProduct', ctrlDeleteProduct.deleteProduct);



module.exports = router;
