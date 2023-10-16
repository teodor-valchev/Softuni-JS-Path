const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("../utils/errorHandler");

router.get("/register", (req, res) => {
    res.render("userForms/register");
});

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;
    try {
        await userService.register({
            firstName,
            lastName,
            email,
            password,
            repeatPassword,
        });

        res.redirect("login");
    } catch (error) {
        const errorMassages = extractErrorMsgs(error);
        res.status(404).render("userforms/register", { errorMassages });
    }
});

router.get("/login", (req, res) => {
    res.render("userForms/login");
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);

        res.cookie("auth", token, { httpOnly: true });
        res.redirect("/");
    } catch (error) {
        const errorMassages = extractErrorMsgs(error);
        res.status(404).render("userforms/login", { errorMassages });
    }
});

router.get("/logout", async (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;
