import { useNavigate, Route, Routes} from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "./context/authContext";
import * as authService  from "./components/services/authService";

import Path from "./paths";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";

import "./App.css";

function App() {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();
    useContext(AuthContext);

    const loginSubmitHandler = async (values) => {
        const user = await authService.login(values);
        
        localStorage.setItem('accessToken',user.accessToken)

        setAuth(user);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const user = await authService.register(values.email,values.password);
        
        localStorage.setItem("accessToken", user.accessToken);
        
        setAuth(user)
        navigate(Path.Home)
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        isAuth: !!auth.accessToken,
    };

    return (
        <div id="box">
            <AuthContext.Provider value={values}>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />}></Route>
                    <Route
                        path={Path["All-Games"]}
                        element={<GameList />}
                    ></Route>
                    <Route
                        path={Path["Create-Game"]}
                        element={<GameCreate />}
                    ></Route>
                    <Route
                        path={Path.Details}
                        element={<GameDetails />}
                    ></Route>
                    <Route path={Path.Login} element={<Login />}></Route>
                    <Route path={Path.Register} element={<Register />}></Route>
                    <Route path={Path.Logout} element={<Logout />}></Route>
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
