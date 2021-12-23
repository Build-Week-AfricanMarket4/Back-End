const router = require('express').Router();

const { restrict } = require('../auth/auth-middleware');
const Users = require('./users-model');

router.get('/', restrict, (req, res, next) => {
    Users.find()
        .then(user => {
            res.json(user)
        })
        .catch(next)
})

module.exports = router;