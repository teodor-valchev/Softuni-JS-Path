const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email required!"],
    },
    password: {
        type: String,
        required: [true, "Password required!"],
    },
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
