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
import { Product } from "../../types/Product";
import { toast } from "react-toastify";
import {
    deleteProduct,
    getProducts,
    postProduct,
} from "../../services/Product.service";
import { getCategories } from "../../services/Category.service";
import { formatTitle } from "../../utils/formatTitle";

const REACT_APP_URLBACKEND =
    import.meta.env.REACT_APP_DEV === "prod"
        ? import.meta.env.REACT_APP_URLBACKEND
        : "http://127.0.0.1:4000/";

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export function Products({ visible, onClose }: IProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [listProducts, setListProducts] = useState<Product[]>([]);
    const [listCategories, setListCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Product["ingredients"]>([]);
    const [fileImage, setFileImage] = useState<File | undefined>();
    const [product, setProduct] = useState<Product>({
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
        setFileImage(file);
    }

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setProduct({
            ...product,
            [e.currentTarget.name]: e.currentTarget.value,
        });
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

    function handleEmptyStates() {
        setProduct({
            name: "",
            description: "",
            ingredients: [],
            price: "",
            category: "",
        });
        setIngredients([]);
        setListCategories([]);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!fileImage) {
            toast.warning("Selecione a imagem do produto.");
            return;
        }

        if (isNaN(Number(product.price))) {
            toast.warning("O Preço não parece um valor válido.");
            return;
        }
        if (!product.name || !product.price || product.category.length === 0) {
            toast.warning("Prencha todos os campos.");
            return;
        }

        const formData = new FormData();

        formData.append("image", fileImage!, fileImage!.name);
        formData.append("name", product.name);
        formData.append("ingredients", JSON.stringify(ingredients));
        formData.append("description", product.description!);
        formData.append("price", product.price);
        formData.append("category", product.category);

        setIsLoading(true);
        postProduct(formData)
            .then(() => {
                toast.success(
                    `O Produto ${product.name} foi criado com sucesso.`
                );
                setIsLoading(false);
            })
            .catch((err) => {
                toast.error(err.response.data.error);
                setIsLoading(false);
            });

        handleEmptyStates();
    }

    async function fetchProductsAndCategories() {
        await getProducts().then(setListProducts);
        await getCategories().then(setListCategories);
    }

    async function handleDeleteProduct(id: string) {
        try {
            setIsLoading(true);
            await deleteProduct(id).then(() => {
                toast.success("O produto foi excluído com sucesso.");
            });
            setIsLoading(false);
        } catch (error: any) {
            toast.error(error.response.data.error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProductsAndCategories();
    }, [isLoading, onClose]);

    useEffect(() => {
        [ingredients];
    });

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
                            value={product.name}
                            id="name"
                            placeholder="Digite o nome do produto"
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            name="description"
                            value={product.description}
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
                            {ingredients!.length === 0 && (
                                <option>Selecione o Ingrediente</option>
                            )}

                            <option value="1-🥓-Bacon">🥓 Bacon</option>
                            <option value="2-🧀-Queijo">🧀 Queijo</option>
                            <option value="3-🍞-Pão Fresco">
                                🍞 Pão Fresco
                            </option>
                        </select>

                        <input
                            name="price"
                            id="price"
                            value={product.price}
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
                    process.env.
                    <button disabled={isLoading} type="submit">
                        {!isLoading
                            ? "Cadastrar Novo Produto"
                            : "Aguardando..."}
                    </button>
                </Container>
                {listProducts.length > 0 && (
                    <span>
                        <FiArrowDownCircle />
                        Existem&nbsp;<strong>{listProducts.length}</strong>
                        &nbsp;produtos cadastrados.
                    </span>
                )}
                <PlainList
                    list={listProducts}
                    renderWhenEmpty={() => (
                        <div className="empty-list">
                            Ainda não existem produtos!
                        </div>
                    )}
                    renderItem={(product) => (
                        <ListProducts key={product._id}>
                            <div className="iten">
                                <ItenImg
                                    image={`${REACT_APP_URLBACKEND}uploads/${product.imagePath}`}
                                />
                                <div className="product-details">
                                    <strong>{formatTitle(product.name)}</strong>
                                    <span>
                                        {formatTitle(product.description!)}
                                    </span>
                                    <section>
                                        {product.ingredients!.length > 0 &&
                                            product.ingredients!.map(
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
                                    <span>
                                        {formatCurrency(Number(product.price))}
                                    </span>
                                </div>
                            </div>

                            <button
                                className="actions"
                                onClick={() =>
                                    handleDeleteProduct(product._id!)
                                }
                            >
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
