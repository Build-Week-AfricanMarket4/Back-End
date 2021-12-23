const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');

router.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body
        const newUser = {
            username,
            password: bcrypt.hashSync(password, 8)
        }
        const created = await Users.add(newUser)
        res.status(201).json(created)
    } catch (err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        res.json('login wired!')
    } catch (err) {
        next(err)
    }
})

router.get('/logout', async (req, res, next) => {
    try {
        res.json('logout wired!')
    }    catch (err)  {
        next(err)
    }
})

module.exports = router;