import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "./src2/components/Text";

export default function App() {
    const [isFontsLoaded] = useFonts({
        "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
        "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
        "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
    });

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text size={13} weight="400" color="#b36800"> Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
    },
});
