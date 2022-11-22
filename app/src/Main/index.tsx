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
                <FooterContainer></FooterContainer>
            </Footer>
        </>
    );
}
