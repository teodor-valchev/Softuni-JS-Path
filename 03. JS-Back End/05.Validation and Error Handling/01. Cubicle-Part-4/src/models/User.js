const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required!"],
        minLength: 5,
        unique: true,
        match: [
            /^[a-zA-Z0-9]+$/,
            "Username must consist only of English letters and digits!",
        ],
    },
    password: {
        type: String,
        minLength: [5, "Password should be at least 8 characters long!"],
    },
});

userSchema.virtual("repeatPassword").set(function (repeatPassword) {
    if (repeatPassword !== this.password) {
        throw new Error("Password mismatch!");
    }
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
