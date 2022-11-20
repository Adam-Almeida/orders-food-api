import { CardBoard, OrdersContainer } from "./style";

interface IProps {
    icon: string;
    title: string;
    quantity: number;
}

export function Board({ icon, title, quantity }: IProps) {
    return (
        <CardBoard>
            <header>
                <img src={icon}/>
                <strong>{title}</strong>
                <span>({quantity})</span>
            </header>
            <OrdersContainer>
                <button type="button">
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </button>
                <button type="button">
                    <strong>Mesa 2</strong>
                    <span>2 Itens</span>
                </button>
            </OrdersContainer>
        </CardBoard>
    );
}
