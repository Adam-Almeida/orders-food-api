/* eslint-disable indent */
import { Overlay, ModalBody, OrderDetails } from "./style";
import closeIcon from "../../assets/images/close-icon.svg";
import alarm from "../../assets/images/alarm.png";
import checkmark from "../../assets/images/checkmark.png";
import fried from "../../assets/images/fried.png";
import { Order } from "../../types/Order";

interface IProps {
    visible: boolean;
    order: Order | null;
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
                        <img
                            src={

                                order.status === "WAITING"
                                    ? `${alarm}`
                                    : order.status === "IN_PRODUCTION"
                                    ? `${fried}`
                                    : `${checkmark}`
                            }
                        />
                        <strong>
                            {
                                order.status === "WAITING"
                                ? "Fila de Espera"
                                : order.status === "IN_PRODUCTION"
                                ? "Em Preparo"
                                : "Pronto!"
                            }
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <small>Itens</small>
                </OrderDetails>
            </ModalBody>
        </Overlay>
    );
}
