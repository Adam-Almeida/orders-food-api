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
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenOrder(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    return (
        <CardBoard>
            <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal} />
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
                            onClick={() => handleOpenOrder(order)}
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
