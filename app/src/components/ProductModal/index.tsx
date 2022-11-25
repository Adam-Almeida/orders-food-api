import { Modal } from "react-native";
import { Product } from "../../types/Products";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { Header, Image, CloseButton } from "./styles";

interface ProductsProps {
    visible: boolean;
    onClose: () => void;
    product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductsProps) {
    if (!product) {
        return null;
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet" //apenas IOS
        >
            <Image
                source={{
                    uri: "https://conteudo.imguol.com.br/f5/2017/07/07/pizza-paulistana-restaurante-margherita-1499457029706_v2_900x506.jpg",
                }}
            >
                <CloseButton onPress={onClose}>
                    <Close></Close>
                </CloseButton>
            </Image>
        </Modal>
    );
}
