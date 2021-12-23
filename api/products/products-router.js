const router = require('express').Router();

const { restrict } = require('../auth/auth-middleware');
const Products = require('./products-model');

router.get('/', restrict, (req, res, next) => {
    Products.getAllProducts()
        .then(product => {
            res.json(product)
        })
        .catch(next)
});

module.exports = router;