import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader, Table } from "./styles";

interface HeaderProps {
    selectedTable: string;
    canelOrder: () => void;
}

export function Header({ selectedTable, canelOrder }: HeaderProps) {
    return (
        <Container>
            {!selectedTable && (
                <>
                    <Text size={14} opacity={0.8}>
                        Bem vindo(a) ao
                    </Text>
                    <Text size={24} weight="700">
                        FOOD<Text size={24}>APP</Text>
                    </Text>
                </>
            )}

            {selectedTable && (
                <Content>
                    <OrderHeader>
                        <Text size={24} weight="600">
                            Pedido
                        </Text>
                        <TouchableOpacity onPress={canelOrder}>
                            <Text color="#D73035" weight="600">
                                cancelar pedido
                            </Text>
                        </TouchableOpacity>
                    </OrderHeader>
                    <Table>
                        <Text color="#666">Mesa {selectedTable}</Text>
                    </Table>
                </Content>
            )}
        </Container>
    );
}
