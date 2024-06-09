import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import Path from "./paths";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDelete from "./components/game-delete/GameDelete";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";
import AuthGuard from "./guards/AuthGuard";

import "./App.css";

function App() {
    return (
        <div id="box">
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />}></Route>
                    <Route
                        path={Path["All-Games"]}
                        element={<GameList />}
                    ></Route>
                    <Route path={Path.Login} element={<Login />}></Route>
                    <Route path={Path.Register} element={<Register />}></Route>
                    <Route path={Path.Logout} element={<Logout />}></Route>

                    <Route element={<AuthGuard />}>
                        <Route path={Path["Create-Game"]} element={<GameCreate />}></Route>
                        <Route path={Path.Delete} element={<GameDelete />}></Route>
                        <Route path={Path.Edit} element={<GameEdit />}></Route>
                        <Route path={Path.Details} element={<GameDetails />}
                    ></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
