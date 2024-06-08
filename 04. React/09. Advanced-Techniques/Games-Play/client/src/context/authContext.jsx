import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../components/services/authService";
import Path from "../paths";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({
children,
}) => {
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");
        return {};
    });

    const navigate = useNavigate();
    useContext(AuthContext);

    const loginSubmitHandler = async (values) => {
        const user = await authService.login(values);

        localStorage.setItem("accessToken", user.accessToken);

        setAuth(user);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const user = await authService.register(values.email, values.password);

        localStorage.setItem("accessToken", user.accessToken);

        setAuth(user);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuth: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
