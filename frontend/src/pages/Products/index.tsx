import {
    Overlay,
    ModalBody,
    Container,
    IngredientList,
    ListProducts,
    ItenImg,
} from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import PlainList from "flatlist-react";
import {
    FiTrash2,
    FiXCircle,
    FiArrowDownCircle,
    FiUpload,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { Category } from "../../types/Category";
import { api } from "../../httpRequest/api";

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
    {
        id: "3",
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
        id: "4",
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
    const [listCategories, setListCategories] = useState<Category[]>([]);

    useEffect(() => {
        api.get("/categories").then(({ data }) => {
            setListCategories(data);
        });
    }, [onClose]);

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
                    <section className="inputs-category-file">
                        <select name="goodies" id="goodies">
                            <option>Selecione a Categoria</option>
                            {listCategories.map((category) => (
                                <option key={category._id} value="donut">
                                    {category.icon} {category.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            className="inputfile"
                        />
                        <label htmlFor="file">
                            <FiUpload />
                            Anexar Imagem
                        </label>
                    </section>
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
                {mockProducts.length > 0 && (
                    <span>
                        <FiArrowDownCircle />
                        Existem&nbsp;<strong>{mockProducts.length}</strong>
                        &nbsp;produtos cadastrados.
                    </span>
                )}
                <PlainList
                    list={mockProducts}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                    renderItem={(product) => (
                        <ListProducts key={product.id}>
                            <div className="iten">
                                <ItenImg image={`${product.imagePath}`} />
                                <div className="product-details">
                                    <strong>{product.title}</strong>
                                    <span>{product.description}</span>
                                    <section>
                                        {product.ingredients.map(
                                            (ingredient) => (
                                                <div key={ingredient.name}>
                                                    <span>
                                                        {ingredient.icon}
                                                    </span>
                                                    <span>
                                                        {ingredient.name}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </section>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>

                            <button className="actions">
                                <FiTrash2 />
                            </button>
                        </ListProducts>
                    )}
                    wrapperHtmlTag="div"
                    className="flatlist"
                />
            </ModalBody>
        </Overlay>
    );
}
