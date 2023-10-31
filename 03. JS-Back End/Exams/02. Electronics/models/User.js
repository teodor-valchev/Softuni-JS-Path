const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, minlength: 10 },
    username: { type: String, required: true, minlength: 3 },
    password: { type: String, required: true, minlength: 4},
});

userSchema.pre("save", async function () {
    const criptedPassword = await bcrypt.hash(this.password, 10);
    this.password = criptedPassword;
});

userSchema.virtual("repeatPassword").set(function (repeatPassword) {
    if (repeatPassword !== this.password) {
        throw new Error("Passwords don't match!");
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
