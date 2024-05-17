const { extractErrorMessages } = require("../helpers/errorHelper");
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
    try {
        await createAccessory(accessoryData);
        res.redirect("/");
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.render("accessory/create", { errorMessages });
    }
});

module.exports = router;
