const router = require("express").Router();

router.get('/register', (req, res) => {
    res.render('userForms/register')
})

router.get("/login", (req, res) => {
    res.render("userForms/login");
});


module.exports = router;