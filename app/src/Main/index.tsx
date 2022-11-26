import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";

import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer,
} from "./styles";
import { TableModal } from "../components/TableModal";
import { useState } from "react";
import { Button } from "../components/Button";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Products";

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setselectedTable] = useState("");
    const [cartItens, setCartItens] = useState<CartItem[]>([]);

    function handleSaveTable(table: string) {
        setselectedTable(table);
    }

    function handleResetOrder() {
        setselectedTable("");
        setCartItens([]);
        setselectedTable("");
    }

    function handleAddToCart(product: Product) {
        if (!selectedTable) {
            setIsTableModalVisible(true);
        }
        setCartItens((prevState) => {
            const item = prevState.findIndex(
                (cartItem) => cartItem.product._id === product._id
            );

            if (item < 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                });
            }

            const newCartItems = [...prevState];
            newCartItems[item] = {
                ...newCartItems[item],
                quantity: newCartItems[item].quantity + 1,
            };

            return newCartItems;
        });
    }

    function handleDecrementProduct(product: Product) {
        setCartItens((prevState) => {
            const itemIndex = prevState.findIndex(
                (cartItem) => cartItem.product._id === product._id
            );
            const newCartItems = [...prevState];

            const item = prevState[itemIndex];
            if (item.quantity === 1) {
                newCartItems.splice(itemIndex, 1);
                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...newCartItems[itemIndex],
                quantity: newCartItems[itemIndex].quantity - 1,
            };

            return newCartItems;
        });
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    canelOrder={handleResetOrder}
                />
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>
                <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} />
                </MenuContainer>
            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}
                    {selectedTable && (
                        <Cart
                            cartItems={cartItens}
                            onAddToCart={handleAddToCart}
                            onDecrement={handleDecrementProduct}
                            onConfirmOrder={handleResetOrder}
                        />
                    )}
                </FooterContainer>
            </Footer>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIsTableModalVisible(false)}
                onSave={handleSaveTable}
            />
        </>
    );
}
