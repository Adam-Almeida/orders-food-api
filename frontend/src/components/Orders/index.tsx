import { Board } from "../Board";
import { Container } from "./style";
import alarm from "../../assets/images/alarm.png";
import fried from "../../assets/images/fried.png";
import checkmark from "../../assets/images/checkmark.png";
import { Order } from "../../types/Order";

const orders: Order[] = [
    {
        _id: "6379a04407fbec26d310e0ff",
        table: "25",
        status: "WAITING",
        products: [
            {
                quantity: 1,
                _id: "6379a04407fbec26d3popioii",
                product: {
                    name: "Pizza Quatro Queijos",
                    imagePath: "1668908831539-quatro-queijos.png",
                    price: 40,
                },
            },
            {
                quantity: 2,
                _id: "6379a04407fbec26d310e211",
                product: {
                    name: "Pizza Quatro Queijos",
                    imagePath: "1668908831539-quatro-queijos.png",
                    price: 42.6,
                },
            },
        ],
    },
];

export function Orders() {
    return (
        <Container>
            <Board icon={alarm} title="Fila de Espera" orders={orders} />
            <Board icon={fried} title="Em Preparo" orders={[]} />
            <Board icon={checkmark} title="Pronto!" orders={[]} />
        </Container>
    );
}
