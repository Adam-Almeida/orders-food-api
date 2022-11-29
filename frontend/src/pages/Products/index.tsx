import {
    Overlay,
    ModalBody,
    Container,
    IngredientList,
    ListProducts,
    ItenImg,
} from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { FiTrash2, FiXCircle } from "react-icons/fi";
import { useEffect } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const mockProducts = [
    {
        id: "1",
        imagePath:
            "http://joselito.com.br/wp-content/uploads/pizza-wallpaper-olives-mushrooms-cheese-tomatoes-parsley-dish-food.jpg",
        title: "Pizza de Gorgonzola com Bacon",
        description: "Pizza de Gorgonzola com Bacon delicisa",
        ingredients: [
            { icon: "🥓", name: "Bacon" },
            { icon: "🧀", name: "Queijo Gorgonzola" },
        ],
        price: 15.0,
    },
    {
        id: "2",
        imagePath:
            "http://joselito.com.br/wp-content/uploads/pizza-wallpaper-olives-mushrooms-cheese-tomatoes-parsley-dish-food.jpg",
        title: "Pizza de Gorgonzola com Bacon",
        description: "Pizza de Gorgonzola com Bacon delicisa",
        ingredients: [
            { icon: "🥓", name: "Bacon" },
            { icon: "🧀", name: "Queijo Gorgonzola" },
        ],
        price: 15.0,
    },
];

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export function Products({ visible, onClose }: IProps) {
    /// fechar o modal ao precionar o esc
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Produtos</strong>
                    <button type="button" onClick={onClose}>
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                </header>
                <Container>
                    <select name="goodies" id="goodies">
                        <option>Selecione a Categoria</option>
                        <option value="donut">🍩 Doces Assados</option>
                        <option value="cookie">🍪 Cokies</option>
                        <option value="hotdog">🌭 Hot-Dog</option>
                        <option value="bacon">🥓 Com Adicionais</option>
                        <option value="hamburger">🍔 Hamburgueres</option>
                        <option value="brocolli">🥦 Vegetais</option>
                    </select>

                    <input placeholder="Digite o nome do produto" />

                    <section className="inputs-ingredients">
                        <select name="goodies" id="goodies">
                            <option>Selecione o Ingrediente</option>
                            <option value="bacon">🥓 Bacon</option>
                            <option value="bacon">🧀 Queijo</option>
                            <option value="bacon">🍞 Pão Fresco</option>
                        </select>
                        <button type="button">Adicionar Ingrediente</button>
                    </section>
                    <IngredientList>
                        <span>
                            🍞 Pão Fresco
                            <button>
                                <FiXCircle />
                            </button>
                        </span>
                        <span>
                            🥓 Bacon
                            <button>
                                <FiXCircle />
                            </button>
                        </span>
                        <span>
                            🍞 Pão Fresco
                            <button>
                                <FiXCircle />
                            </button>
                        </span>
                    </IngredientList>

                    <button type="submit">Cadastrar Novo Produto</button>
                </Container>
                {mockProducts.map((product) => (
                    <ListProducts key={product.id}>
                        <div className="iten">
                            <ItenImg image={`${product.imagePath}`} />
                            <div className="product-details">
                                <strong>{product.title}</strong>
                                <span>{product.description}</span>
                                <section>
                                    {product.ingredients.map((ingredient) => (
                                        <div key={ingredient.name}>
                                            <span>{ingredient.icon}</span>
                                            <span>{ingredient.name}</span>
                                        </div>
                                    ))}
                                </section>
                                <span>{formatCurrency(product.price)}</span>
                            </div>
                        </div>

                        <button className="actions">
                            <FiTrash2 />
                        </button>
                    </ListProducts>
                ))}
            </ModalBody>
        </Overlay>
    );
}
