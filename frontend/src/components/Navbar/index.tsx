import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { FiPlusCircle, FiGrid, FiBox, FiDollarSign } from "react-icons/fi";

export function Navbar() {
    return (
        <Container>
            <Content>
                <Link to="/orders">
                    <FiPlusCircle />
                    PEDIDOS
                </Link>
                <Link to="/categories">
                    <FiGrid />
                    CATEGORIAS
                </Link>
                <Link to="/products">
                    <FiBox />
                    PRODUTOS
                </Link>
                <Link to="/finishing">
                    <FiDollarSign />
                    CAIXA
                </Link>
            </Content>
        </Container>
    );
}
