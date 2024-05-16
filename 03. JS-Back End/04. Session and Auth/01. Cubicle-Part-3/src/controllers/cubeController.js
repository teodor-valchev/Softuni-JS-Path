const router = require("express").Router();
const { getAllAccessories, getOthers } = require("../service/accessoryService");
const {
    createCube,
    getCube,
    attachAccessory,
} = require("../service/cubeService");

router.get("/create", (req, res) => {
    res.render("cube/create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cubeData = {
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
    };
    await createCube(cubeData);

    res.redirect("/");
});

router.get("/details/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const accessories = cube.accessories;

    const hasAccessories = accessories.length;

    res.render("cube/details", { cube, accessories, hasAccessories });
});

router.get("/attach/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const accessories = await getOthers(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;

    res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/attach/:cubeId", (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/details/${cubeId}`);
});

module.exports = router;
