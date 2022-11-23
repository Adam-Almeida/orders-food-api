import { Modal, TouchableOpacity, Platform } from "react-native";
import { Button } from "../../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { ModalBody, Overlay, Header, Form, Input } from "./styles";

export function TableModal() {
    return (
        <Modal transparent>
            <Overlay
                behavior={Platform.OS === "android" ? "height" : "padding"}
            >
                <ModalBody>
                    <Header>
                        <Text weight="600">Informe a Mesa</Text>
                        <TouchableOpacity>
                            <Close color="#666"></Close>
                        </TouchableOpacity>
                    </Header>
                    <Form>
                        <Input
                            placeholder="Número da Mesa"
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                        />
                        <Button onPress={() => alert("salvou")}>Salvar</Button>
                    </Form>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
