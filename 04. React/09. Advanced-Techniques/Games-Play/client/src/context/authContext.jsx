import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../components/services/authService";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({
children,
}) => {
    const [auth, setAuth] = usePersistedState('auth',{});

    const navigate = useNavigate();
    useContext(AuthContext);

    const loginSubmitHandler = async (values) => {
        const user = await authService.login(values);

        setAuth(user);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const user = await authService.register(values.email, values.password);

        setAuth(user);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth('',{});
        localStorage.clear();
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuth: !!auth.accessToken,
        userId: auth._id
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
