const jwt = require('../customLibrary/jwt')
const {SECRET} = require('../configs/configuration')


// Checking if user is authenticated
exports.AuthUser = async(req, res, next) => {
    const token = req.cookies["authToken"];

    if (token) {
        try {
            const decriptedToken = await jwt.verify(token, SECRET);
            req.user = decriptedToken;
            res.locals.user = decriptedToken;
            res.locals.isUserAuthenticated = true;

            next();
        } catch (error) {
            res.clearCookie("authToken");
            res.redirect("/users/login");
        }
        return;
    }

    next()
}