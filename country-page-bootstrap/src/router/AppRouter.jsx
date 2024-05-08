import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}

export default AppRouter;