const express = require('express');
const router = express.Router();

const ctrlSections = require('../controllers/sections');
const ctrlProducts = require('../controllers/products');


// Sections
router
    .route('/sections')
    .get(ctrlSections.sectionsListAll)
    .post(ctrlSections.sectionsCreate);

router
    .route('/sections/:sectionid')
    .get(ctrlSections.sectionsReadOne)
    .put(ctrlSections.sectionsUpdateOne)
    .delete(ctrlSections.sectionsDeleteOne);


// Products
router
    .route('/sections/:sectionid/products')
    .post(ctrlProducts.productsCreate);

router
    .route('/sections/:sectionid/products/:productid')
    .get(ctrlProducts.productsReadOne)
    .put(ctrlProducts.productsUpdateOne)
    .delete(ctrlProducts.productsDeleteOne);

module.exports = router;