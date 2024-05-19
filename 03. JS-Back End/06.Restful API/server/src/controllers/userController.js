const { register, login } = require("../services/userService");

const router = require("express").Router();

router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const userData = { email, password };
    try {
        const result = await register(userData);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await login(email, password);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.get("/logout", async (req, res) => {
    res.json("User successfully logged out!")
});

module.exports = router;
