const router = require("express").Router();
const userService = require('../services/user');
const errorHelper = require('../helpers/errorHelper')

router.get('/register', (req, res) => {
    res.render('register')
})

router.post("/register", async (req, res) => {
    const { email, username, password, repeatPassword } = req.body;
    try {
        const userData = {
            email,
            username,
            password,
            repeatPassword
        };
    
        await userService.createNewUser(userData);
    
        res.redirect("/users/login");
        
    } catch (error) {
        const errorMessages = errorHelper.getErrorMsgs(error)
        res.status(404).render('register', {errorMessages})
    }
});

router.get('/login', (req, res) => {
    res.render('login')
})
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    const token = await userService.loginUser(email, password);
    
    res.cookie('authToken', token)

    res.redirect("/");
});

router.get('/logout', (req, res) => {
    res.clearCookie('authToken')
    res.redirect('/')
})



module.exports = router