import env from "react-dotenv";
import { Board } from "../Board";
import { Container } from "./style";
import alarm from "../../assets/images/alarm.png";
import fried from "../../assets/images/fried.png";
import checkmark from "../../assets/images/checkmark.png";
import { Order } from "../../types/Order";
import { useEffect, useState } from "react";
import { api } from "../../httpRequest/api";
import socketIo from "socket.io-client";

export function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const socket = socketIo(`${env.SOCKETURLAPP}`, {
            transports: ["websocket"],
        });
        socket.on("order@new", (order) => {
            setOrders((prevState) => prevState.concat(order));
        });
    }, []);

    useEffect(() => {
        api.get("/orders").then(({ data }) => {
            setOrders(data);
        });
    }, []);

    const waiting = orders.filter((order) => order.status === "WAITING");
    const production = orders.filter(
        (order) => order.status === "IN_PRODUCTION"
    );
    const done = orders.filter((order) => order.status === "DONE");

    function handleCancelOrder(orderId: string) {
        setOrders((prevState) =>
            prevState.filter((order) => order._id !== orderId)
        );
    }

    function handleOrderStatusChange(orderId: string, status: Order["status"]) {
        setOrders((prevState) =>
            prevState.map((order) =>
                order._id === orderId ? { ...order, status } : order
            )
        );
    }

    return (
        <Container>
            <Board
                onCancelOrder={handleCancelOrder}
                icon={alarm}
                title="Fila de Espera"
                orders={waiting}
                onChangeOrderStatus={handleOrderStatusChange}
            />
            <Board
                onCancelOrder={handleCancelOrder}
                icon={fried}
                title="Em Preparo"
                orders={production}
                onChangeOrderStatus={handleOrderStatusChange}
            />
            <Board
                onCancelOrder={handleCancelOrder}
                icon={checkmark}
                title="Pronto!"
                orders={done}
                onChangeOrderStatus={handleOrderStatusChange}
            />
        </Container>
    );
}
