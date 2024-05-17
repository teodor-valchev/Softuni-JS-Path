const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const SECRET = require("../config");

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    const user = await User.findOne({ username }).lean();

    if (!user) {
        throw new Error("Username or password dont match!");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Username or password dont match!");
    }

    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

    return token;
};