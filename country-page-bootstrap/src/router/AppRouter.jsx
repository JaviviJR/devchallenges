import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { CountriesAPIProvider } from "../context/CountriesAPIProvider";
import DetailPage from "../pages/DetailPage";

function AppRouter() {
    return (
        <CountriesAPIProvider>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="country/:id" element={<DetailPage />} />
            </Routes>
        </CountriesAPIProvider>
    );
}

export default AppRouter;