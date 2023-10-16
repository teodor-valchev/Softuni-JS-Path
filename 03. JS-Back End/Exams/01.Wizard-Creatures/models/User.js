const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.virtual("repeatPassword").set(function (value) {
    if (value !== this.password) {
        throw new Error ("Password missmatch!");
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

const User = mongoose.model("User", userSchema);

module.exports = User;
