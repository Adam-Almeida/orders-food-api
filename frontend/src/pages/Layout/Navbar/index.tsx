import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { FiPlusCircle, FiGrid, FiBox, FiDollarSign } from "react-icons/fi";
import { Categories } from "../../Categories";
import { useState } from "react";
import { Products } from "../../Products";

export function Navbar() {
    const [categoryIsVisible, setCategoryIsVisible] = useState(false);
    const [productIsVisible, setProductIsVisible] = useState(false);

    function handleCloseCategory() {
        setCategoryIsVisible(false);
    }

    function handleCloseProducts() {
        setProductIsVisible(false);
    }

    return (
        <Container>
            <Content>
                <Link to="/orders">
                    <FiPlusCircle />
                    PEDIDOS
                </Link>
                <a onClick={() => setCategoryIsVisible(true)}>
                    <FiGrid />
                    CATEGORIAS
                </a>
                <a onClick={() => setProductIsVisible(true)}>
                    <FiBox />
                    PRODUTOS
                </a>
                <Link to="/finishing-tables">
                    <FiDollarSign />
                    CAIXA
                </Link>
            </Content>
            <Categories
                onClose={() => handleCloseCategory()}
                visible={categoryIsVisible}
            />
            <Products
                onClose={() => handleCloseProducts()}
                visible={productIsVisible}
            />
        </Container>
    );
}
