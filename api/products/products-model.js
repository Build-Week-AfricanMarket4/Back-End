const db = require('../data/db-config');

function getAllProducts() {
    return db('products')
}

const getPlantsBy = (filter) => {
    return db('products')
        .where(filter).first()
  }


module.exports = {
    getAllProducts,
    getPlantsBy
}