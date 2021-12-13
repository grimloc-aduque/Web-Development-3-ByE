const express = require('express');
const router = express.Router();
const mw = require('../../middleware')


// Traigo los controladores
const ctrlHome = require('../controllers/home');
const ctrlProducts = require('../controllers/products');
const ctrlAbout = require('../controllers/about');

const ctrlShoppingCart = require('../controllers/shoppingCart');
const ctrlCheckout = require('../controllers/checkout');
const ctrlUserOrders = require('../controllers/userOrders');

const ctrlLogin = require('../controllers/login');
const ctrlSignin = require('../controllers/signin');
const ctrlLogout = require('../controllers/logout');

const ctrlManageStore = require('../controllers/back_office/manageStore')
const ctrlManageProducts = require('../controllers/back_office/manageProducts')
const ctrlManageSections = require('../controllers/back_office/manageSections')
const ctrlOrders = require('../controllers/back_office/orders');




router.use(mw.jwtCookie)
// Direccionammiento de rutas

// Mostrar contenido
router.get('/', ctrlHome.home);
router.get('/products', ctrlProducts.products);
router.get('/about', ctrlAbout.about);

// Carrito
router.get('/shoppingCart', mw.auth, ctrlShoppingCart.shoppingCart);
router.post('/shoppingCart/addProduct', mw.auth, ctrlShoppingCart.doAddProduct);
router.post('/shoppingCart/removeProduct', mw.auth, ctrlShoppingCart.doRemoveProduct);
router.post('/shoppingCart/editProduct', mw.auth, ctrlShoppingCart.doEditProduct);


// Finalizacion de compra del usuario
router.post('/checkout', mw.auth, ctrlCheckout.checkout);
router.post('/finishPurchase', mw.auth, ctrlCheckout.doCheckout);

// Visualizacion de pedidos del usuario
router.get('/userOrders', mw.auth, ctrlUserOrders.userOrders);


// Creacion e inicio de sesion
router
    .route('/login')
    .get(ctrlLogin.login)
    .post(ctrlLogin.doLogin);
    
router
    .route('/signin')
    .get(ctrlSignin.addUser)
    .post(ctrlSignin.doAddUser);

router.get('/logout', ctrlLogout.doLogout)


// ---------- Back Office
router.get('/manageStore', mw.admin, ctrlManageStore.manageStore);

// Secciones
router
    .route('/manageStore/createSection')
    .get(mw.admin, ctrlManageSections.createSection)
    .post(mw.admin, ctrlManageSections.doCreateSection);

router
    .route('/manageStore/:sectionid/editSection')
    .get(mw.admin, ctrlManageSections.editSection)
    .post(mw.admin, ctrlManageSections.doEditSection);

router.route('/manageStore/:sectionid/deleteSection')
    .get(mw.admin, ctrlManageSections.doDeleteSection);


// Productos
router
    .route('/manageStore/:sectionid/createProduct')
    .get(mw.admin, ctrlManageProducts.createProduct)
    .post(mw.admin, ctrlManageProducts.doCreateProduct);

router
    .route('/manageStore/:sectionid/:productid/editProduct')
    .get(mw.admin, ctrlManageProducts.editProduct)
    .post(mw.admin, ctrlManageProducts.doEditProduct);

router.route('/manageStore/:sectionid/:productid/deleteProduct')
    .get(mw.admin, ctrlManageProducts.doDeleteProduct);


// Pedidos
router
    .route('/manageStore/orders')
    .get(mw.admin, ctrlOrders.orders)
    .post(mw.admin, ctrlOrders.filterOrders);

router
    .route('/manageStore/orders/updateStatus')
    .post(mw.admin, ctrlOrders.updateStatus)

module.exports = router;
