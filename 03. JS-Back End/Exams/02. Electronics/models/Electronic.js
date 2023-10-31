const mongoose = require("mongoose");

const ElectronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        minlength: 2,
    },
    production: {
        type: Number,
        required: true,
    },
    exploitation: {
        type: Number,
        required: true,
    },
    damages: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    buyingList: [
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

const Electronics = mongoose.model("Electronics", ElectronicSchema);

module.exports = Electronics;
