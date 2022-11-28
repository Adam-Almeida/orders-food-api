import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Global } from "./styles/Global";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";
import { Navbar } from "./components/Navbar";
import { MainContainer } from "./components/Layout/MainContainer";

export function App() {
    return (
        <Router>
            <Global />
            <Header />
            <Navbar />
            <MainContainer>
                <Routes>
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </MainContainer>
            <ToastContainer position="bottom-center" />
        </Router>
    );
}
