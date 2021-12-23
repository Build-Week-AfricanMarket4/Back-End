const db = require('../data/db-config');

function getAllProducts() {
    return db('products')
}


module.exports = {
    getAllProducts
}