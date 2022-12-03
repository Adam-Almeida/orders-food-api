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
import { api, apiUpload } from "../../httpRequest/api";
import { Product } from "../../types/Product";
import { toast } from "react-toastify";

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

interface IProductPayload {
    name: string;
    description: string;
    ingredients: Product["ingredients"];
    price: string;
    category: string;
}

export function Products({ visible, onClose }: IProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [listCategories, setListCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Product["ingredients"]>([]);
    const [upfile, setUpfile] = useState({});
    const [product, setProduct] = useState<IProductPayload>({
        name: "",
        description: "",
        ingredients: [],
        price: "",
        category: "",
    });

    function uploadHandler(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;

        if (!target.files) {
            return;
        }

        const file = target.files[0];
        const formData = new FormData();

        const payload = {
            name: product.name,
            description: product.description,
            ingredients: JSON.stringify(ingredients),
            price: product.price,
            category: product.category,
        };

        formData.append("image", file, file.name);
        formData.append("name", payload.name);
        formData.append("ingredients", payload.ingredients);
        formData.append("description", payload.description);
        formData.append("price", payload.price);
        formData.append("category", payload.category);

        setUpfile(formData);
    }

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setProduct({
            ...product,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isNaN(Number(product.price))) {
            toast.warning("O Preço não parece um valor válido.");
            return;
        }
        // if (!product.name || !product.price || product.category.length === 0) {
        //     toast.warning("Prencha todos os campos.");
        //     return;
        // }

        try {
            await apiUpload.post("/products", upfile).then(() => {
                toast.success(
                    `O Produto ${product.name} foi criado com sucesso.`
                );
            });
        } catch (error: any) {
            toast.error(error.response.data.error);
        }
    }

    function addListChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const newIngredient = e.currentTarget.value;
        const [_id, icon, name] = newIngredient.split("-");
        if (_id && icon && name) {
            setIngredients([...ingredients!, { icon, name }]);
        }
    }

    function handleRemoveIngredients(index: number) {
        ingredients!.splice(index, 1);
        setIngredients([...ingredients!]);
    }

    useEffect(() => {
        [ingredients];
    });

    useEffect(() => {
        api.get("/categories").then(({ data }) => {
            setListCategories(data);
        });
    }, []);

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
                <Container onSubmit={handleSubmit} name="adamFormn">
                    <section className="inputs-category-file">
                        <select
                            onChange={handleInputChange}
                            name="category"
                            id="category"
                        >
                            <option>Selecione a Categoria</option>
                            {listCategories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.icon} {category.name}
                                </option>
                            ))}
                        </select>
                        <input
                            name="image"
                            type="file"
                            id="image"
                            onChange={uploadHandler}
                            className="inputfile"
                        />
                        <label htmlFor="image">
                            <FiUpload />
                            Anexar Imagem
                        </label>
                    </section>
                    <section className="inputs-ingredients">
                        <input
                            name="name"
                            id="name"
                            placeholder="Digite o nome do produto"
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            name="description"
                            id="description"
                            placeholder="Breve descrição do produto"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section>

                    <section className="inputs-ingredients">
                        <select
                            onChange={(e) => addListChange(e)}
                            name="ingredient"
                            id="ingredient"
                        >
                            <option>Selecione o Ingrediente</option>
                            <option value="1-🥓-Bacon">🥓 Bacon</option>
                            <option value="2-🧀-Queijo">🧀 Queijo</option>
                            <option value="3-🍞-Pão Fresco">
                                🍞 Pão Fresco
                            </option>
                        </select>

                        <input
                            name="price"
                            id="price"
                            placeholder="R$ 00.00"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section>
                    <IngredientList>
                        {ingredients!.map((ingredient, index) => (
                            <span key={index}>
                                {ingredient.icon}&nbsp;{ingredient.name}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRemoveIngredients(index)
                                    }
                                >
                                    <FiXCircle />
                                </button>
                            </span>
                        ))}
                    </IngredientList>

                    <button disabled={isLoading} type="submit">
                        Cadastrar Novo Produto
                    </button>
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
