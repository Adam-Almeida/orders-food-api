// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Global } from "./styles/Global";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";
import { Navbar } from "./pages/Layout/Navbar";
import { MainContainer } from "./pages/Layout/MainContainer";
import { FinishingTables } from "./pages/FinishingTables";

export function App() {
    return (
        <Router>
            <Global />
            <Header />
            <Navbar />
            <MainContainer>
                <Routes>
                    <Route path="/orders" element={<Orders />} />
                    <Route
                        path="/finishing-tables"
                        element={<FinishingTables />}
                    />
                </Routes>
            </MainContainer>
            <ToastContainer position="bottom-center" />
        </Router>
    );
}
