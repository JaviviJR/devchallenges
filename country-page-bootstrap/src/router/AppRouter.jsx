import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { CountriesAPIProvider } from "../context/CountriesAPIProvider";

function AppRouter() {
    return (
        <CountriesAPIProvider>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </CountriesAPIProvider>
    );
}

export default AppRouter;