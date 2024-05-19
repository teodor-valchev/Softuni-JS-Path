const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, "Make required!"],
    },
    model: {
        type: String,
        required: [true, "Model required!"],
    },
    year: {
        type: Number,
        required: [true, "Year required!"],
    },
    description: {
        type: String,
        required: [true, "Description required!"],
    },
    price: {
        type: Number,
        required: [true, "Price required!"],
    },
    img: {
        type: String,
        required: [true, "Image required!"],
    },
    material: String,
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
