import { Route, Routes } from "react-router-dom";
import NavigationHeader from "./Components/NavifationHeader";
import Catalog from "./Components/Catalog";
import Home from "./Components/Home";

function App() {
    return (
        <>
            <NavigationHeader />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/details/:memeId" element={<Catalog />} />
            </Routes>
        </>
    );
}

export default App;
