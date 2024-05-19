const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

exports.auth = async (req, res, next) => {
    const token = req.header("X-Authorization");

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({
                message: "you are not authorized!",
            });
        }
    } else {
        next();
    }
};

//middleware for route guard
exports.isAuth = (req, res, next) => {
    const user = req.user;
    if (!user) {
        res.redirect("/users/login");
        next();
        return;
    }
    next();
};
