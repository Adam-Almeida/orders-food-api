import { Container} from "./style";
import { Text } from "../Text";
import { ActivityIndicator } from "react-native";
interface BProps {
    children: string;
    onPress: () => void;
    disable?: boolean;
    loading?: boolean;
}

export function Button({ children, onPress, disable, loading }: BProps) {
    return (
        <Container onPress={onPress} disabled={disable || loading}>
            {!loading && (
                <Text weight="600" color="#fff">
                    {children}
                </Text>
            )}
            {loading && <ActivityIndicator color="#fff" />}
        </Container>
    );
}
