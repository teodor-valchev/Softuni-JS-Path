const mongoose = require("mongoose");

const CreatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    species: { type: String, required: true },
    skin: { type: String, required: true },
    eye: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    votes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Creature = mongoose.model("Creature", CreatureSchema);

module.exports = Creature;
