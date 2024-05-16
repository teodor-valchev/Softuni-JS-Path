const { register, login } = require("../service/authService");

const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const token = await login(username, password);
    res.cookie("auth", token);

    res.redirect("/");
});

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    const userData = {
        username,
        password,
        repeatPassword,
    };

    await register(userData);

    res.redirect("/users/login");
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;
