import { Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "./context/authContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";

import "./App.css";

function App() {
    useContext(AuthContext);
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        setAuth(values);
    };

    const values = {
        loginSubmitHandler,
        isAuth: !!auth.email
    };

    return (
        <div id="box">
            <AuthContext.Provider value={values}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/all-games" element={<GameList />}></Route>
                    <Route path="/create" element={<GameCreate />}></Route>
                    <Route
                        path="/details/:gameId"
                        element={<GameDetails />}
                    ></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
