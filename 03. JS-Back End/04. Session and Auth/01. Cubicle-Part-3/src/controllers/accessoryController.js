const { createAccessory } = require("../service/accessoryService");

const router = require("express").Router();

router.get("/create", (req, res) => {
    res.render("accessory/create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl } = req.body;
    const accessoryData = {
        name,
        description,
        imageUrl,
    };
    await createAccessory(accessoryData);

    res.redirect("/");
});

module.exports = router;
