const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Sesiones
 
const auth = (req, res, next) => {
    if(req.cookies.payload){
        // console.log(req.cookies.payload.token)
        // console.log(process.env.JWT_SECRET)
        jwt.verify(req.cookies.payload.token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                // console.log(err)
                res.redirect('/login')
            }else{
                req.body.userid = decoded._id;
                req.body.admin = decoded.admin;
                // console.log(decoded);
                next();
            }
        });
    }else{
        res.render('error', {
            msg: 'Inicie sesión para ver esta página'
        })
    }
}

const admin = (req, res, next) => {
    if(req.body.admin === true){
        next();
    }else{
        res.render('error', {
            msg: 'No es administrador de la página'
        });
    }

}

/*
const validateUser = (req, res) => {
    console.log(req.cookies)
    const apiOptions = requestAPI.apiOptions;
    if(req.payload && req.payload.email){
        const email = req.payload.email
        const path = `/api/users/findEmail/${email}`;
        const requestOptions = {
            url: `${apiOptions.server}${path}`,
            method: 'GET'
        };
        axios(requestOptions)
        .then( response => {
            if(response.status === 200) {
                return
            }
            else{
                red.redirect('/login')
            }
        })
        .catch( error => {
            res.redirect('/login')
        });
    }
}
*/



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





// Direccionammiento de rutas

// Mostrar contenido
router.get('/', ctrlHome.home);
router.get('/products', auth, ctrlProducts.products);
router.get('/about', ctrlAbout.about);

// Carrito
router.get('/shoppingCart', auth, ctrlShoppingCart.shoppingCart);
router.post('/shoppingCart/addProduct', auth, ctrlShoppingCart.doAddProduct);
router.post('/shoppingCart/removeProduct', auth, ctrlShoppingCart.doRemoveProduct);
router.post('/shoppingCart/editProduct', auth, ctrlShoppingCart.doEditProduct);


// Finalizacion de compra del usuario
router.post('/checkout', auth, ctrlCheckout.checkout);
router.post('/finishPurchase', auth, ctrlCheckout.doCheckout);

// Visualizacion de pedidos del usuario
router.get('/userOrders', auth, ctrlUserOrders.userOrders);


// Creacion e inicio de sesion
router
    .route('/login')
    .get( ctrlLogin.login)
    .post( ctrlLogin.doLogin);
    
router
    .route('/signin')
    .get( ctrlSignin.addUser)
    .post( ctrlSignin.doAddUser);

router.get('/logout', ctrlLogout.doLogout)


// ---------- Back Office
router.get('/manageStore', auth, admin, ctrlManageStore.manageStore);

// Secciones
router
    .route('/manageStore/createSection')
    .get(auth, admin, ctrlManageSections.createSection)
    .post(auth, admin, ctrlManageSections.doCreateSection);

router
    .route('/manageStore/:sectionid/editSection')
    .get(auth, admin, ctrlManageSections.editSection)
    .post(auth, admin, ctrlManageSections.doEditSection);

router.get('/manageStore/:sectionid/deleteSection', 
            auth, admin, ctrlManageSections.doDeleteSection);


// Productos
router
    .route('/manageStore/:sectionid/createProduct')
    .get(auth, admin, ctrlManageProducts.createProduct)
    .post(auth, admin, ctrlManageProducts.doCreateProduct);

router
    .route('/manageStore/:sectionid/:productid/editProduct')
    .get(auth, admin, ctrlManageProducts.editProduct)
    .post(auth, admin, ctrlManageProducts.doEditProduct);

router.get('/manageStore/:sectionid/:productid/deleteProduct', 
            auth, admin, ctrlManageProducts.doDeleteProduct);


// Pedidos
router
    .route('/manageStore/orders')
    .get(auth, admin, ctrlOrders.orders)
    .post(auth, admin, ctrlOrders.filterOrders);

router
    .route('/manageStore/orders/updateStatus')
    .post(auth, admin, ctrlOrders.updateStatus)

module.exports = router;
