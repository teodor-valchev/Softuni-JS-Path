const mongoose = require("mongoose");

const CreatureSchema = new mongoose.Schema({
    name: { type: String },
    species: { type: String },
    skin: { type: String },
    eye: { type: String },
    image: { type: String },
    description: { type: String },
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
