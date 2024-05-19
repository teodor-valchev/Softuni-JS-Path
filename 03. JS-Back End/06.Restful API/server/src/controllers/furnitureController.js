const {
    create,
    getAll,
    getSingleFurniture,
    edit,
    deleteFurniture,
} = require("../services/furnitureService");

const router = require("express").Router();

router.post("/catalog", async (req, res) => {
    const { make, model, year, description, price, img, material } = req.body;
    const furnitureData = {
        make,
        model,
        year,
        description,
        price,
        img,
        material,
        _ownerId: req.user._id,
    };
    try {
        await create(furnitureData);
        res.json(furnitureData);
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
});

router.get("/catalog", async (req, res) => {
    try {
        const allFurniture = await getAll(req.query);
        res.json(allFurniture);
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
});

router.get("/catalog/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    try {
        const furniture = await getSingleFurniture(furnitureId);
        res.json(furniture);
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
});

router.put("/catalog/:furnitureId", async (req, res) => {
    const { make, model, year, description, price, img, material } = req.body;
    const furnitureData = {
        make,
        model,
        year,
        description,
        price,
        img,
        material,
    };
    const furnitureId = req.params.furnitureId;
    try {
        const furniture = await edit(furnitureId, furnitureData);
        res.json(furniture);
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
});

router.delete("/catalog/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    try {
        const furniture = await deleteFurniture(furnitureId);
        res.json(furniture);
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
});

module.exports = router;
