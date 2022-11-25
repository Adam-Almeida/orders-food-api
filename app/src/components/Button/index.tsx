import { Container } from "./style";
import { Text } from "../Text";
interface BProps {
    children: string;
    onPress: () => void;
    disable?: boolean;
}

export function Button({ children, onPress, disable }: BProps) {
    return (
        <Container onPress={onPress} disabled={disable}>
            <Text weight="600" color="#fff">
                {children}
            </Text>
        </Container>
    );
}
