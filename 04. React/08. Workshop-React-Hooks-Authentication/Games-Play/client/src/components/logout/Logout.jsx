import { useEffect } from "react"

import * as authService from "../services/authService";

const Logout = () => {
    return (
        useEffect(() => {
            authService.logout()
                .then(data => localStorage.removeItem('accessToken'));
        })
    )
}

export default Logout