import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import axios from "axios";
import { products as mockProducts } from "../mocks/products";
import { categories as mockCategories } from "../mocks/categories";

import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer,
    CenteredContainer,
} from "./styles";
import { TableModal } from "../components/TableModal";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Products";
import { ActivityIndicator } from "react-native";
import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";
import { Category } from "../types/Categories";

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setselectedTable] = useState("");
    const [cartItens, setCartItens] = useState<CartItem[]>([]);
    const [isLoading, setisLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        Promise.all([
            axios.get("http://10.1.1.182:3001/categories"),
            axios.get("http://10.1.1.182:3001/products"),
        ]).then(([categoriesResponse, productsResponse]) => {
            setProducts(productsResponse.data);
            setCategories(categoriesResponse.data);
            setisLoading(false);
        });
    }, []);

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
                {isLoading && (
                    <CenteredContainer>
                        <ActivityIndicator color="#d73035" size="large" />
                    </CenteredContainer>
                )}

                {!isLoading && (
                    <>
                        <CategoriesContainer>
                            <Categories categories={categories} />
                        </CategoriesContainer>
                        {products.length > 0 ? (
                            <MenuContainer>
                                <Menu
                                    products={products}
                                    onAddToCart={handleAddToCart}
                                />
                            </MenuContainer>
                        ) : (
                            <CenteredContainer>
                                <Empty />
                                <Text color="#666" style={{ marginTop: 18 }}>
                                    Nenhum produto foi encontrado.
                                </Text>
                            </CenteredContainer>
                        )}
                    </>
                )}
            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button
                            disable={isLoading}
                            onPress={() => setIsTableModalVisible(true)}
                        >
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
