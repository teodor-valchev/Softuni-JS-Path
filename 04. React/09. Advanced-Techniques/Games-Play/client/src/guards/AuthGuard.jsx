import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

import AuthContext from "../context/authContext"
import Path from "../paths"

const AuthGuard = () => {
    const { isAuth } = useContext(AuthContext)
    
    if (!isAuth) {
        return Navigate({to: Path.Login})
    }

    return <Outlet />
}


export default AuthGuard