import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Container, Button } from "./styles";

interface OrderConfirmedModalprops {
    visible: boolean;
    onOk: () => void;
}

export function OrderConfirmedModal({
    visible,
    onOk,
}: OrderConfirmedModalprops) {
    return (
        <Modal animationType="fade" visible={visible}>
            <Container>
                <CheckCircle />
                <Text
                    style={{ marginTop: 5 }}
                    color="#fff"
                    size={20}
                    weight="600"
                >
                    Pedido confirmado
                </Text>
                <Text color="#fff">
                    O pedido ja entrou na fila de produção!
                </Text>
                <Button onPress={() => onOk()}>
                    <Text color="#d73035" weight="600">
                        Ok
                    </Text>
                </Button>
            </Container>
        </Modal>
    );
}
