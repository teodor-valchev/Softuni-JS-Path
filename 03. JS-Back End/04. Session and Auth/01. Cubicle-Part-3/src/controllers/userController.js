const { register } = require('../service/authService')

const router = require('express').Router()

router.get('/login', (req, res) => {
    res.render('user/login')
})

router.get('/register', (req, res) => {
    res.render('user/register')
})

router.post('/register',async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    const userData = {
        username,
        password,
        repeatPassword
    }

    await register(userData)


    res.redirect('/')
})

module.exports = router