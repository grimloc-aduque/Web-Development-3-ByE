const express = require('express');
const router = express.Router();

// Traigo los controladores
const ctrlHome = require('../controllers/home');
const ctrlProducts = require('../controllers/products');
const ctrlAbout = require('../controllers/about');

const ctrlShoppingCart = require('../controllers/shoppingCart');
const ctrlCheckout = require('../controllers/checkout');
const ctrlUserOrders = require('../controllers/userOrders');

const ctrlLogin = require('../controllers/login');
const ctrlSignin = require('../controllers/signin');

const ctrlManageStore = require('../controllers/back_office/manageStore')
const ctrlManageProducts = require('../controllers/back_office/manageProducts')
const ctrlManageSections = require('../controllers/back_office/manageSections')
const ctrlOrders = require('../controllers/back_office/orders');
const passport = require('passport');



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
router.post('/checkout', ctrlCheckout.checkout);
router.post('/finishPurchase', ctrlCheckout.doCheckout);

// Visualizacion de pedidos del usuario
router.get('/userOrders', ctrlUserOrders.userOrders);


// Creacion e inicio de sesion
router
    .route('/login')
    .get( ctrlLogin.login)
    .post( ctrlLogin.doLogin);
    
router
    .route('/signin')
    .get( ctrlSignin.addUser)
    .post( ctrlSignin.doAddUser);


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


// Pedidos
router
    .route('/manageStore/orders')
    .get(ctrlOrders.orders)
    .post(ctrlOrders.filterOrders);

router
    .route('/manageStore/orders/updateStatus')
    .post(ctrlOrders.updateStatus)

module.exports = router;
