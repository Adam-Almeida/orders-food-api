/* eslint-disable indent */
import { Overlay, ModalBody, OrderDetails, ItenImg } from "./style";
import closeIcon from "../../assets/images/close-icon.svg";
import alarm from "../../assets/images/alarm.png";
import checkmark from "../../assets/images/checkmark.png";
import fried from "../../assets/images/fried.png";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface IProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: IProps) {
    if (!visible || !order) {
        return null;
    }

    // let total = 0;

    // order.products.forEach(({ quantity, product }) => {
    //     total += quantity * product.price;
    // });

    const total = order.products.reduce((total, { product, quantity }) => {
        return total + product.price * quantity;
    }, 0);

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>
                    <button type="button" onClick={onClose}>
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
                            {order.status === "WAITING"
                                ? "Fila de Espera"
                                : order.status === "IN_PRODUCTION"
                                ? "Em Preparo"
                                : "Pronto!"}
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <small>Itens</small>

                    {order.products.map(({ _id, product, quantity }) => (
                        <div className="iten" key={_id}>
                            <ItenImg
                                image={`http://localhost:3001/uploads/${product.imagePath}`}
                            />
                            <span className="quantity">{quantity}x</span>
                            <div className="product-details">
                                <strong>{product.name}</strong>
                                <span>{formatCurrency(product.price)}</span>
                            </div>
                        </div>
                    ))}

                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(total)}</strong>
                    </div>
                    <button>
                        <img src={fried} />
                        Inicar Produção
                    </button>

                    <button className="cancel">
                        <strong>Cancelar Pedido</strong>
                    </button>
                </OrderDetails>
            </ModalBody>
        </Overlay>
    );
}