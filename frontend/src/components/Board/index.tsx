import { Order } from "../../types/Order";
import { CardBoard, OrdersContainer } from "./style";

interface IProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function Board({ icon, title, orders }: IProps) {
    return (
        <CardBoard>
            <header>
                <img src={icon} />
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button type="button" key={order._id}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} Itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </CardBoard>
    );
}
