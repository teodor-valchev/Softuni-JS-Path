const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

exports.register = async (userData) => {
    const result = await getAuthToken(userData);
    return result;
};

exports.login = async (email, password) => {
    const user = await User.findOne({ email }).lean();

    if (!user) {
        throw new Error("User or password dont match");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("User or password dont match");
    }

    const result = getAuthToken(user);

    return result;
};

async function getAuthToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "1d" });

    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    };

    return result;
}
