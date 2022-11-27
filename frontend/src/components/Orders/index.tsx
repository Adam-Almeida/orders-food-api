import { Board } from "../Board";
import { Container } from "./style";
import alarm from "../../assets/images/alarm.png";
import fried from "../../assets/images/fried.png";
import checkmark from "../../assets/images/checkmark.png";
import { Order } from "../../types/Order";
import { useEffect, useState } from "react";
import { api } from "../../httpRequest/api";

// const orders: Order[] = [
//     {
//         _id: "6379a04407fbec26d310e0ff",
//         table: "25",
//         status: "WAITING",
//         products: [
//             {
//                 quantity: 1,
//                 _id: "6379a04407fbec26d3popioii",
//                 product: {
//                     name: "Pizza Quatro Queijos",
//                     imagePath: "1668908831539-quatro-queijos.png",
//                     price: 40,
//                 },
//             },
//             {
//                 quantity: 2,
//                 _id: "6379a04407fbec26d310e211",
//                 product: {
//                     name: "Pizza Quatro Queijos",
//                     imagePath: "1668908831539-quatro-queijos.png",
//                     price: 42.6,
//                 },
//             },
//         ],
//     },
// ];

export function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

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

    return (
        <Container>
            <Board onCancelOrder={handleCancelOrder} icon={alarm} title="Fila de Espera" orders={waiting} />
            <Board onCancelOrder={handleCancelOrder} icon={fried} title="Em Preparo" orders={production} />
            <Board onCancelOrder={handleCancelOrder} icon={checkmark} title="Pronto!" orders={done} />
        </Container>
    );
}
