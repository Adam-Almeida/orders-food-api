import { FlatList} from "react-native";
import { products } from "../../mocks/products";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";

import { Product, Image, ProductDetails, Separator , AddToCartButton} from "./styles";

export function Menu() {
    return (
        <FlatList
            ItemSeparatorComponent={Separator}
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            data={products}
            keyExtractor={(product) => product._id}
            renderItem={({ item: product }) => (
                <Product>
                    <Image
                        source={{
                            // uri: `http://10.1.1.182:19000/uploads/${product.imagePath}`,
                            uri: "https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg",
                        }}
                    />
                    <ProductDetails>
                        <Text weight="600">{product.name}</Text>
                        <Text
                            style={{ marginVertical: 8 }}
                            color="#666"
                            size={14}
                        >
                            {product.description}
                        </Text>
                        <Text size={14} weight="600">
                            {formatCurrency(product.price)}
                        </Text>
                    </ProductDetails>

                    <AddToCartButton>
                        <PlusCircle />
                    </AddToCartButton>
                </Product>
            )}
        />
    );
}
