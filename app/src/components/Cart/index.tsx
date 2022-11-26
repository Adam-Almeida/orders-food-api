import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Products";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { Text } from "../Text";
import {
    Actions,
    ContainerItem,
    Image,
    ProductDatils,
    ProductItem,
    QuantityContainer,
    Summary,
    TotalContainer,
} from "./styles";
interface CartProps {
    cartItems: CartItem[];
    onAddToCart: (product: Product) => void;
    onDecrement: (product: Product) => void;
    onConfirmOrder: () => void;
}

export function Cart({
    cartItems,
    onAddToCart,
    onDecrement,
    onConfirmOrder,
}: CartProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const total = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0);

    function handleConfirmOrder() {
        setIsModalVisible(true);
    }

    function handleOk() {
        onConfirmOrder();
        setIsModalVisible(false);
    }

    return (
        <>
            <OrderConfirmedModal
                onOk={() => handleOk()}
                visible={isModalVisible}
            />
            {cartItems.length > 0 && (
                <FlatList
                    style={{ marginBottom: 20, maxHeight: 135 }}
                    data={cartItems}
                    keyExtractor={(cartItem) => cartItem.product._id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: cartItem }) => (
                        <ContainerItem>
                            <ProductItem>
                                <Image
                                    source={{
                                        uri: "https://conteudo.imguol.com.br/f5/2017/07/07/pizza-paulistana-restaurante-margherita-1499457029706_v2_900x506.jpg",
                                    }}
                                />
                                <QuantityContainer>
                                    <Text size={14} color="#666">
                                        {cartItem.quantity}x
                                    </Text>
                                </QuantityContainer>
                                <ProductDatils>
                                    <Text size={14} weight="600">
                                        {cartItem.product.name}
                                    </Text>
                                    <Text
                                        size={14}
                                        color="#666"
                                        style={{ marginTop: 4 }}
                                    >
                                        {formatCurrency(cartItem.product.price)}
                                    </Text>
                                </ProductDatils>
                            </ProductItem>
                            <Actions>
                                <TouchableOpacity
                                    style={{ marginRight: 24 }}
                                    onPress={() =>
                                        onAddToCart(cartItem.product)
                                    }
                                >
                                    <PlusCircle />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        onDecrement(cartItem.product)
                                    }
                                >
                                    <MinusCircle />
                                </TouchableOpacity>
                            </Actions>
                        </ContainerItem>
                    )}
                />
            )}

            <Summary>
                <TotalContainer>
                    {cartItems.length > 0 ? (
                        <>
                            <Text color="#666">Total</Text>
                            <Text size={20} weight="600">
                                {formatCurrency(total)}
                            </Text>
                        </>
                    ) : (
                        <>
                            <Text size={10} color="#666">
                                Seu carrinho está vazio!
                            </Text>
                        </>
                    )}
                </TotalContainer>

                <Button
                    disable={cartItems.length > 0 ? false : true}
                    onPress={() => handleConfirmOrder()}
                >
                    Confirmar Pedido
                </Button>
            </Summary>
        </>
    );
}
