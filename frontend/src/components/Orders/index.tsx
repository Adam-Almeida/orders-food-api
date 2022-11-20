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
                product: {
                    name: "Pizza Quatro Queijos",
                    imagePath: "1668905847951-quatro-queijos.png",
                    price: 40,
                },
                quantity: 5,
                _id: "6379a04407fbec26d310e200",
            },
        ],
    },
    {
        _id: "6379a04407fbec26d310e0fg",
        table: "29",
        status: "WAITING",
        products: [
            {
                product: {
                    name: "Pizza Catupiry",
                    imagePath: "1668905847951-quatro-queijos.png",
                    price: 56.3,
                },
                quantity: 2,
                _id: "6379a04407fbec26d310e100",
            },
            {
                product: {
                    name: "Pizza Frango",
                    imagePath: "1668905847951-quatro-queijos.png",
                    price: 56.3,
                },
                quantity: 2,
                _id: "6379a04407fbec26d310e100",
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
