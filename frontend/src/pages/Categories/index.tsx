import { Overlay, ModalBody, Container, ListCategories } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { FiTrash2 } from "react-icons/fi";
import { useEffect } from "react";

const mockCategories = [
    { id: "1", icon: "🥬", title: "Saladas" },
    { id: "2", icon: "🍕", title: "Pizzas" },
    { id: "3", icon: "🍔", title: "Hamburguers" },
];

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
                            <option>Selecione o Icone</option>
                            <option value="donut">🍩</option>
                            <option value="cookie">🍪</option>
                            <option value="hotdog">🌭</option>
                            <option value="bacon">🥓</option>
                            <option value="hamburger">🍔</option>
                            <option value="brocolli">🥦</option>
                        </select>

                        <input placeholder="Digite o nome da categoria" />
                    </section>
                    <button type="submit">Cadastrar Nova Categoria</button>
                </Container>
                {mockCategories.map((category) => (
                    <ListCategories key={category.id}>
                        <div className="details">
                            <span>{category.icon}</span>
                            <p>{category.title}</p>
                        </div>
                        <button className="actions">
                            <FiTrash2 />
                        </button>
                    </ListCategories>
                ))}
            </ModalBody>
        </Overlay>
    );
}
