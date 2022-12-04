import { Overlay, ModalBody, Container, ListCategories } from "./styles";
import PlainList from "flatlist-react";
import closeIcon from "../../assets/images/close-icon.svg";
import { FiTrash2, FiArrowDownCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { emojis } from "../../mocks/emojis";
import { toast } from "react-toastify";
import { Category } from "../../types/Category";
import { Loader } from "../../components/Loader";
import {
    deleteCategory,
    getCategories,
    postCategory,
} from "../../services/Category.service";
import { formatTitle } from "../../utils/formatTitle";

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export function Categories({ visible, onClose }: IProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [listCategories, setListCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<Category>({
        name: "",
        icon: "",
    });

    async function fetchCategories() {
        await getCategories().then(setListCategories);
    }

    useEffect(() => {
        fetchCategories();
    }, [isLoading, onClose]);

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setCategory({
            ...category,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!category.icon || !category.name) {
            toast.warning("Preencha todos os campos.");
            return;
        }

        setIsLoading(true);
        await postCategory(category).then(() => {
            toast.success(
                `A Categoria ${category.name} foi criada com sucesso.`
            );
        });
        setCategory({ icon: "", name: "" });
        setIsLoading(false);
    }

    async function handleDeleteCategory(id: string) {
        try {
            setIsLoading(true);
            await deleteCategory(id).then(() => {
                toast.success("A Categoria foi excluída com sucesso.");
            });
            setIsLoading(false);
        } catch (error: any) {
            toast.error(error.response.data.error);
            setIsLoading(false);
        }
    }

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
                    <strong>Categorias</strong>
                    <button type="button" onClick={onClose}>
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                </header>
                <Container onSubmit={handleSubmit}>
                    <section className="inputs-icon-name">
                        <select
                            value={category.icon}
                            name="icon"
                            id="icon"
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option>Icone</option>
                            {emojis.map((emoji, index) => (
                                <option key={index} value={emoji}>
                                    {emoji}
                                </option>
                            ))}
                        </select>

                        <input
                            onChange={(e) => handleInputChange(e)}
                            id="name"
                            name="name"
                            value={category.name}
                            placeholder="Digite o nome da categoria"
                        />
                    </section>
                    <button disabled={isLoading} type="submit">
                        Cadastrar Nova Categoria
                    </button>
                </Container>
                {listCategories.length > 0 && (
                    <span>
                        <FiArrowDownCircle />
                        Existem&nbsp;<strong>{listCategories.length}</strong>
                        &nbsp;categorias cadastradas.
                    </span>
                )}

                {!isLoading ? (
                    <PlainList
                        list={listCategories}
                        renderWhenEmpty={() => (
                            <div className="empty-list">
                                Ainda não existem categorias!
                            </div>
                        )}
                        renderItem={({ ...category }) => (
                            <ListCategories key={category._id}>
                                <div className="details">
                                    <span>{category.icon}</span>
                                    <p>{formatTitle(category.name)}</p>
                                </div>
                                <button
                                    onClick={() =>
                                        handleDeleteCategory(category._id!)
                                    }
                                    className="actions"
                                >
                                    <FiTrash2 />
                                </button>
                            </ListCategories>
                        )}
                        wrapperHtmlTag="div"
                        className="flatlist"
                    />
                ) : (
                    <Loader />
                )}
            </ModalBody>
        </Overlay>
    );
}
