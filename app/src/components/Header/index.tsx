import { Text } from "../Text";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Text size={14} opacity={0.8}>
                Bem vindo(a) ao
            </Text>
            <Text size={24} weight="700">
                FOOD<Text size={24}>APP</Text>
            </Text>
        </Container>
    );
}
