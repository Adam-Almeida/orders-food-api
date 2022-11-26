import { FlatList, Modal } from "react-native";
import { Button } from "../Button";
import { Product } from "../../types/Products";
import { formatCurrency } from "../../utils/formatCurrency";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
    ModalBody,
    Header,
    Image,
    CloseButton,
    IngredientsContainer,
    Ingredient,
    Footer,
    FooterContainer,
    Price,
} from "./styles";

interface ProductsProps {
    visible: boolean;
    onClose: () => void;
    product: null | Product;
    onAddToCart: (product: Product) => void;
}

export function ProductModal({
    visible,
    onClose,
    product,
    onAddToCart,
}: ProductsProps) {
    if (!product) {
        return null;
    }

    function handleAddToCart() {
        onAddToCart(product!);
        onClose();
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

            <ModalBody>
                <Header>
                    <Text size={24} weight="600">
                        {product.name}
                    </Text>
                    <Text color="#666">{product.description}</Text>
                </Header>

                {product.ingredients.length > 0 && (
                    <IngredientsContainer>
                        <Text weight="600" color="#666">
                            Ingredientes
                        </Text>
                        <FlatList
                            style={{ marginTop: 8 }}
                            data={product.ingredients}
                            keyExtractor={(ingredient) => ingredient._id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item: ingredient }) => (
                                <Ingredient>
                                    <Text>{ingredient.icon}</Text>
                                    <Text
                                        size={14}
                                        color="#666"
                                        style={{ marginLeft: 24 }}
                                    >
                                        {ingredient.name}
                                    </Text>
                                </Ingredient>
                            )}
                        />
                    </IngredientsContainer>
                )}
            </ModalBody>
            <Footer>
                <FooterContainer>
                    <Price>
                        <Text color="#666">Preço</Text>
                        <Text weight="600" size={24}>
                            {formatCurrency(product.price)}
                        </Text>
                    </Price>

                    <Button onPress={() => handleAddToCart()}>
                        Adicionar ao pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </Modal>
    );
}
