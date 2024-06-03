import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/all-games/Catalog";
import Create from "./components/create-game/Create";
import "./App.css";

function App() {
    return (
        <div id="box">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/all-games" element={<Catalog />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </div>
    );
}

export default App;
