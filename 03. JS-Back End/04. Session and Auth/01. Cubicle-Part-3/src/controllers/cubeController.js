const router = require("express").Router();
const { difficultyLevelViewData } = require("../helpers/viewData");
const { getAllAccessories, getOthers } = require("../service/accessoryService");
const {
    createCube,
    getCube,
    attachAccessory,
    editCube,
    deleteCube,
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
        creator: req.user._id,
    };
    await createCube(cubeData);

    res.redirect("/");
});

router.get("/details/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const accessories = cube.accessories;

    const hasAccessories = accessories.length;
    const isOwner = cube.creator?._id.toString() === req.user._id;

    res.render("cube/details", { cube, accessories, hasAccessories, isOwner });
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

router.get("/edit/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const difficultyLevels = difficultyLevelViewData(cube.difficultyLevel);

    res.render("cube/edit", { cube, difficultyLevels });
});

router.post("/edit/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const data = {
        name,
        description,
        imageUrl,
        difficultyLevel,
    };

    await editCube(cubeId, data);

    res.redirect(`/cubes/details/${cubeId}`);
});

router.get("/delete/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await getCube(cubeId).lean();
    const difficultyLevels = difficultyLevelViewData(cube.difficultyLevel);

    res.render("cube/delete", { cube, difficultyLevels });
});

router.post("/delete/:cubeId", async (req, res) => {
    const cubeId = req.params.cubeId;
    await deleteCube(cubeId);

    res.redirect("/");
});

module.exports = router;
