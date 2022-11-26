import { useState } from "react";
import { FlatList } from "react-native";
import { Product } from "../../types/Products";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { Text } from "../Text";

import {
    ProductContainer,
    Image,
    ProductDetails,
    Separator,
    AddToCartButton,
} from "./styles";

interface MenuPros {
    onAddToCart: (product: Product) => void;
    products: Product[]
}

export function Menu({ onAddToCart, products }: MenuPros) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(
        null
    );

    function handleOpenModal(product: Product) {
        setIsModalVisible(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <ProductModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
            />

            <FlatList
                ItemSeparatorComponent={Separator}
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                data={products}
                keyExtractor={(product) => product._id}
                renderItem={({ item: product }) => (
                    <ProductContainer onPress={() => handleOpenModal(product)}>
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

                        <AddToCartButton onPress={() => onAddToCart(product)}>
                            <PlusCircle />
                        </AddToCartButton>
                    </ProductContainer>
                )}
            />
        </>
    );
}
