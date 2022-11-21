import { Overlay, ModalBody } from "./style";
import closeIcon from "../../assets/images/close-icon.svg";

interface IProps {
    visible: boolean;
}

export function OrderModal({ visible }: IProps) {
    if (!visible) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa 2</strong>
                    <button type="button">
                        <img src={closeIcon} alt="Feclar" />
                    </button>
                </header>
            </ModalBody>
        </Overlay>
    );
}
