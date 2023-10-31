const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../customLibrary/jwt");
const { SECRET } = require("../configs/configuration");

exports.createNewUser = async (userData) => await User.create(userData);

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password!");
    }

    const validatePass = bcrypt.compare(password, user.password);

    if (!validatePass) {
        throw new Error("Invalid username or password");
    }

    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

    return token;
};
