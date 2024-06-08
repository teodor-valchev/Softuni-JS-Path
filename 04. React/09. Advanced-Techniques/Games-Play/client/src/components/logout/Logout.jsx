import { useContext, useEffect } from "react";

import * as authService from "../services/authService";
import AuthContext from "../../context/authContext";

const Logout = () => {
    const { logoutHandler } = useContext(AuthContext);
    return useEffect(() => {
        authService.logout().then((data) => {
            logoutHandler();
        });
    });
};

export default Logout;
