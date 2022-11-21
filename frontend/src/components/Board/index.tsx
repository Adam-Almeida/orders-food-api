import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { CardBoard, OrdersContainer } from "./style";

interface IProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function Board({ icon, title, orders }: IProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleOpenOrder() {
        setIsModalVisible(true);
    }

    return (
        <CardBoard>
            <OrderModal visible={isModalVisible} />
            <header>
                <img src={icon} />
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button
                            type="button"
                            key={order._id}
                            onClick={handleOpenOrder}
                        >
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} Itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </CardBoard>
    );
}
