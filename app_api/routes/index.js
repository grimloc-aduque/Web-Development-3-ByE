const express = require('express');
const router = express.Router();

const ctrlSections = require('../controllers/sections');
const ctrlProducts = require('../controllers/products');
const ctrlUsers =require('../controllers/users');
const ctrlCarrito = require('../controllers/carrito');


// Sections
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


// Carrito
router
    .route('/users/:userid/shoppingCart')
    .get(ctrlCarrito.carritoRead)
    .put(ctrlCarrito.carritoAddProduct)
    .delete(ctrlCarrito.carritoRemoveProduct); 


module.exports = router;