import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { formatCurrency } from "../../utils/formatCurrency";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import {
    Actions,
    ContainerItem,
    Image,
    ProductDatils,
    ProductItem,
    QuantityContainer,
} from "./styles";
interface CartProps {
    cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
    return (
        <FlatList
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
                        <TouchableOpacity style={{marginRight: 24}}>
                            <PlusCircle />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MinusCircle />
                        </TouchableOpacity>
                    </Actions>
                </ContainerItem>
            )}
        />
    );
}
