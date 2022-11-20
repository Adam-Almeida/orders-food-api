import { Global } from "./styles/Global";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";

export function App() {
    return (
        <>
            <Global />
            <Header />
            <Orders />
        </>
    );
}
