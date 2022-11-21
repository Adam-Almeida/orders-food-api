import { Overlay, ModalBody, OrderDetails } from "./style";
import closeIcon from "../../assets/images/close-icon.svg";
import alarm from "../../assets/images/alarm.png";
import { Order } from "../../types/Order";

interface IProps {
    visible: boolean;
    order: Order | null
}

export function OrderModal({ visible, order }: IProps) {
    if (!visible || !order) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>
                    <button type="button">
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                </header>
                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <img src={alarm}/>
                        <strong>Fila de Espera</strong>
                    </div>
                </div>

                <OrderDetails>
                    <small>Itens</small>

                </OrderDetails>

            </ModalBody>
        </Overlay>
    );
}
