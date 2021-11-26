const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['RS256']
});

const ctrlSections = require('../controllers/sections');
const ctrlProducts = require('../controllers/products');
const ctrlUsers = require('../controllers/users');
const ctrlAuth = require('../controllers/authentication');
const ctrlCarrito = require('../controllers/carrito');
const ctrlOrders = require('../controllers/orders');


// Sections
// Agregar auth para restringir api endpoints

router
    .route('/sections')
    .get(ctrlSections.sectionList)
    .post(ctrlSections.sectionCreate);


router
    .route('/sections/:sectionid')
    .get(ctrlSections.sectionRead)
    .put(ctrlSections.sectionUpdate)
    .delete(ctrlSections.sectionDelete);


// Products
router
    .route('/sections/:sectionid/products')
    .get(ctrlProducts.productList)
    .post(ctrlProducts.productCreate);

router
    .route('/sections/:sectionid/products/:productid')
    .get(ctrlProducts.productRead)
    .put(ctrlProducts.productUpdate)
    .delete(ctrlProducts.productDelete);


// Users 
router 
    .route('/users')
    .post(ctrlUsers.userCreate)
    .get(ctrlUsers.userList);
router
    .route('/users/:userid')
    .get(ctrlUsers.userRead)
    .put(ctrlUsers.userUpdate)
    .delete(ctrlUsers.userDelete);

router
    .route('/search/:name')
    .get(ctrlUsers.userFindEmail);


// Autenticacion
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

    
// Carrito
router
    .route('/users/:userid/shoppingCart')
    .get(ctrlCarrito.carritoRead)
    .put(ctrlCarrito.carritoAddProduct)
    .delete(ctrlCarrito.carritoRemoveProduct); 


// Facturacion / Orders
router
    .route('/orders')
    .get(ctrlOrders.orderList)
    .post(ctrlOrders.orderCreate);

router.put('/orders/:orderid', ctrlOrders.orderUpdate);
router.get('/orders/:userid', ctrlOrders.orderListByUserid);




module.exports = router;