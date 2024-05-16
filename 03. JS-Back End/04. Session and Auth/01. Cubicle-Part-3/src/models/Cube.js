const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Accessory",
        },
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
