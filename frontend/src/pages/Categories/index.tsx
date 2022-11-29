import { Overlay, ModalBody, Container, ListCategories } from "./styles";
import PlainList from "flatlist-react";
import closeIcon from "../../assets/images/close-icon.svg";
import { FiTrash2, FiArrowDownCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { emojis } from "../../mocks/emojis";

const mockCategories = [
    { id: "1", icon: "🥬", title: "Saladas" },
    { id: "2", icon: "🍕", title: "Pizzas" },
    { id: "3", icon: "🍔", title: "Hamburguers" },
    { id: "4", icon: "🥬", title: "Saladas" },
    { id: "5", icon: "🍕", title: "Pizzas" },
    { id: "6", icon: "🍔", title: "Hamburguers" },
    { id: "7", icon: "🥬", title: "Saladas" },
    { id: "8", icon: "🍕", title: "Pizzas" },
];

for (let index = 0; index < 1000; index++) {
    mockCategories.push({ id: "1", icon: "🍕", title: "Pizzas" });
}

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export function Categories({ visible, onClose }: IProps) {
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
                    <strong>Categorias</strong>
                    <button type="button" onClick={onClose}>
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                </header>
                <Container>
                    <section className="inputs-icon-name">
                        <select name="goodies" id="goodies">
                            <option>Icone</option>
                            {emojis.map((emoji) => (
                                <option key={emoji} value={emoji}>
                                    {emoji}
                                </option>
                            ))}
                        </select>

                        <input placeholder="Digite o nome da categoria" />
                    </section>
                    <button type="submit">Cadastrar Nova Categoria</button>
                </Container>
                {mockCategories.length > 0 && (
                    <span>
                        <FiArrowDownCircle />
                        Existem&nbsp;<strong>{mockCategories.length}</strong>
                        &nbsp;categorias cadastradas.
                    </span>
                )}

                <PlainList
                    list={mockCategories}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                    renderItem={(category) => (
                        <ListCategories key={category.id}>
                            <div className="details">
                                <span>{category.icon}</span>
                                <p>{category.title}</p>
                            </div>
                            <button className="actions">
                                <FiTrash2 />
                            </button>
                        </ListCategories>
                    )}
                    wrapperHtmlTag="div"
                    className="flatlist"
                />
            </ModalBody>
        </Overlay>
    );
}
