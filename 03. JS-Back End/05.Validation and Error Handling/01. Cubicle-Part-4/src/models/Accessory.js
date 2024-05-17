const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [5, "Name should be at least 5 characters"],
        required: [true, "Name required!"],
        match: [
            /^[a-zA-Z0-9\s]+$/,
            "Name must consist only of English letters, digits, and spaces!",
        ],
    },
    description: {
        type: String,
        minLength: [20, "Description should be at least 20 characters"],
        match: [
            /^[a-zA-Z0-9\s]+$/,
            "Description must consist only of English letters, digits, and spaces!",
        ],
    },
    imageUrl: {
        type: String,
        match: [
            /^https?:\/\//,
            "Image URL must start with http:// or https://",
        ],
    },
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
