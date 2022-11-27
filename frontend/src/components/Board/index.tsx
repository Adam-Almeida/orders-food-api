import { useState } from "react";
import { api } from "../../httpRequest/api";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { CardBoard, OrdersContainer } from "./style";

interface IProps {
    icon: string;
    title: string;
    orders: Order[];
    onCancelOrder: (orderId: string) => void;
}

export function Board({ icon, title, orders, onCancelOrder }: IProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleOpenOrder(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    async function handelCancelOrder() {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await api.delete(`/orders/${selectedOrder?._id}`);

        onCancelOrder(selectedOrder?._id);
        setIsLoading(false);
        setIsModalVisible(false);
    }

    return (
        <CardBoard>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
                onCancelOrder={handelCancelOrder}
                isLoading={isLoading}
            />
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
