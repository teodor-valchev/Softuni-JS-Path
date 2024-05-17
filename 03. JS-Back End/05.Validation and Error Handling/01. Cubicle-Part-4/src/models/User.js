const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

userSchema.virtual("repeatPassword").set(function (repeatPassword) {
    if (repeatPassword !== this.password) {
        throw new mongoose.Error("Password mismatch!");
    }
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
