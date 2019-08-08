const express = require('express');
const router = express.Router();
const passport = require('passport');

const cartController = require('../../controllers/cart');
const authenticate = passport.authenticate('jwt',{session: false});

// Creates new Cart for user with the userId
router.post('/createCart', authenticate, cartController.createNewCart);

// Add Product to the user Cart
// :id = cartId
router.put('/addProductToCart/:id', authenticate, cartController.addProductToCart);

// Delete Product from the user Cart
// :id = cartId
router.put('/deleteProduct/:id', authenticate, cartController.deleteProductFromCart);

// Delete all products from the user Cart
// :id = cartId
router.put('/deleteAllProducts/:id', authenticate, cartController.deleteAllProductsFromCart);

// add here two more routes
// A : get user cart with it's current status
// B : get user cart by cartId

module.exports = router;