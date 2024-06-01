import { Route, Routes } from "react-router-dom";
import NavigationHeader from "./Components/NavifationHeader";
import Catalog from "./Components/Catalog";
import Home from "./Components/Home";
import Details from "./Components/Details";

function App() {
    return (
        <>
            <NavigationHeader />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/details/:gameId" element={<Details />} />
            </Routes>
        </>
    );
}

export default App;
