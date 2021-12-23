const router = require('express').Router();
const Users = require('./users-model');
const Products = require('../products/products-model');
const { restrict } = require('../auth/auth-middleware');
const bcrypt = require('bcryptjs');
const { BCRYPT_ROUNDS } = require('../configs/secrets');


router.get('/', restrict, (req, res, next) => {
    Users.find()
        .then(user => {
            res.json(user)
        })
        .catch(next)
})

router.get('/:id', restrict, async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await Users.findById(id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', restrict, async (req, res, next) => {
    try {
        const userId = req.params.id
        let changes = req.body
        if(!changes.username || !changes.password) {
            res.status(400).json({
                message: "please fill all required fields out"
            })
        } else {
            let newPassword = changes.password
            const hash = bcrypt.hashSync(newPassword, BCRYPT_ROUNDS)
            changes = {
                ...changes,
                password: hash
            }
            const updatedUser = await Users.update(userId, changes)
            res.json(updatedUser)
        }
    } catch (err){
        next(err)
    }
})

router.get('/:id/products', restrict, async (req, res, next) => { //eslint-disable-line
    const product = await Products.findById(req.params.id)
    res.status(200).json(product)
  })

router.get('/:id/products/:product_id', restrict, async (req, res, next) => { //eslint-disable-line
    const product = await Products.findByProductId(req.params.id, req.params.product_id)
    res.status(200).json(product)
  })
  
router.post('/:id/products', restrict, async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await Users.findBy(userId)
        if (!user) {
            res.status(404).json({
                message: "user does not exist"
            })
        } else {
            const newProduct = await Products.create(req.params.id, req.body)
            res.status(200).json(newProduct)
        }
  } catch (err) {
      next(err)
  }
})

router.delete('/:id/plants/:plant_id', restrict, async (req, res, next) => {
    const userId = req.params.id
    const userProductId = req.params.plant_id
    try{
      const productToDelete = await Products.findByPlantId(userId, userProductId)
      const idToDelete = productToDelete[0].user_product_id
      const deleted = await Products.remove(idToDelete)
      res.json(deleted)
    }catch(err){
      next(err)
    }
  })

router.put('/:id/plants/:plant_id', restrict, async (req, res, next) => {
      try {
        const userId = req.params.id
        const userProductId = req.params.product_id
        const changes = req.body

        if(!changes.product_name) {
            res.status(400).json({
                message: 'please fill all required fields out'
            })
        } else {
            const updatedProduct = await Products.updateProduct(userProductId, changes, userId)
            res.json(updatedProduct)
        }
      } catch (err) {
          next(err)
      }
  })

module.exports = router;