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
