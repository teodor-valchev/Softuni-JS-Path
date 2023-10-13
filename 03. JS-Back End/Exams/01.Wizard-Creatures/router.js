const router = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");


router.use("/users", userController);
router.use(homeController);

router.get("*", (req, res) => {
    res.redirect("404");
});

module.exports = router;
