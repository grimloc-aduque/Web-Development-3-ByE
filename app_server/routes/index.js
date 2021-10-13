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
const ctrlManageProducts = require('../controllers/back_office/manageProducts')
const ctrlManageSections = require('../controllers/back_office/manageSections')


// Direccionammiento de rutas

// Mostrar contenido
router.get('/', ctrlHome.home);
router.get('/products', ctrlProducts.products);
router.get('/about', ctrlAbout.about);

// Carrito
router.get('/shoppingCart', ctrlShoppingCart.shoppingCart);
router.post('/shoppingCart/addProduct', ctrlShoppingCart.doAddProduct);
router.post('/shoppingCart/removeProduct', ctrlShoppingCart.doRemoveProduct);
router.post('/shoppingCart/editProduct', ctrlShoppingCart.doEditProduct);


// Finalizacion de compra del usuario
router.get('/checkout', ctrlCheckout.checkout);

// Creacion e inicio de sesion
router.get('/login', ctrlLogin.login);
router.get('/signin', ctrlSignin.signin);


// ---------- Back Office
router.get('/manageStore', ctrlManageStore.manageStore);

// Secciones
router
    .route('/manageStore/createSection')
    .get(ctrlManageSections.createSection)
    .post(ctrlManageSections.doCreateSection);

router
    .route('/manageStore/:sectionid/editSection')
    .get(ctrlManageSections.editSection)
    .post(ctrlManageSections.doEditSection);

router.get('/manageStore/:sectionid/deleteSection', 
            ctrlManageSections.doDeleteSection);


// Productos
router
    .route('/manageStore/:sectionid/createProduct')
    .get(ctrlManageProducts.createProduct)
    .post(ctrlManageProducts.doCreateProduct);

router
    .route('/manageStore/:sectionid/:productid/editProduct')
    .get(ctrlManageProducts.editProduct)
    .post(ctrlManageProducts.doEditProduct);

router.get('/manageStore/:sectionid/:productid/deleteProduct', 
            ctrlManageProducts.doDeleteProduct);



module.exports = router;
