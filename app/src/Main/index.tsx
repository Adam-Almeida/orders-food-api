import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import { Button } from "../Button";

import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer,
} from "./styles";
import { TableModal } from "../components/TableModal";

export function Main() {
    return (
        <>
            <Container>
                <Header />
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>
                <MenuContainer>
                    <Menu></Menu>
                </MenuContainer>
            </Container>

            <Footer>
                <FooterContainer>
                    <Button onPress={() => alert("jj")}>Novo Pedido</Button>
                </FooterContainer>
            </Footer>

            <TableModal />
        </>
    );
}
