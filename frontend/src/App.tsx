import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Global } from "./styles/Global";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";

export function App() {
    return (
        <>
            <Global />
            <Header />
            <Orders />
            <ToastContainer position="bottom-center" />
        </>
    );
}
