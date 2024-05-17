const jwt = require("../utils/jwt");
const SECRET = require("../config");

exports.auth = async (req, res, next) => {
    const token = req.cookies["auth"];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken
            // in res.locals we can save different objects and access them when we make requests at any time and in the templates also.
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            next();
            return
        } catch (err) {
            res.clearCookie("auth");
            res.redirect("/users/login");
            return;
        }
    } else {
        next();
    }
};

//middleware for route guard
exports.isAuth = (req, res, next) => {
    const user = req.user
    if (!user) {
        res.redirect('/users/login')
        next()
        return
    }
    next()
}
