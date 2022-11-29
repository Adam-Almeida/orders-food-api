import styled from "styled-components";

export const Overlay = styled.div`
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: var(--white);
    width: 720px;
    padding: 2rem;
    border-radius: 0.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 24px;
        }

        button {
            display: flex;
            border: 0;
            background: transparent;
        }
    }
`;

export const Container = styled.form`
    > select {
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        border-radius: 3rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;
        margin-top: 2rem;
    }

    .inputs-ingredients {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        select {
            width: 58%;
            padding: 0 1.5rem;
            height: 3.5rem;
            border-radius: 3rem;
            border: 1px solid #d7d7d7;
            background: #e7e9ee;
            font-weight: 400;
            font-size: 1rem;
        }

        button {
            border: none;
            border-radius: 3rem;
            background: var(--theme);
            width: 40%;
            padding: 0 1.5rem;
            height: 4rem;
            font-weight: 600;
            color: var(--white);

            transition: filter 0.2s;
            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        border-radius: 3rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;
        margin-top: 1rem;

        &::placeholder {
            color: var(--gray-200);
        }

        & + input {
            margin-top: 0.8rem;
        }
    }

    button[type="submit"] {
        border: none;
        border-radius: 3rem;
        background: var(--theme);
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1rem;
        font-weight: 600;
        color: var(--white);

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const IngredientList = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;

    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--gray-100);
        padding: 0.2rem 1rem;
        border-radius: 30px;
        button {
            border: none;
            padding: 0.5rem;

            svg {
                display: flex;
            }
        }
    }
`;

export const ListProducts = styled.div`
    position: relative;
    background: var(--gray-100);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 0.25rem;
    + div {
        margin-top: 1rem;
    }

    .iten {
        display: flex;
        gap: 0.7rem;

        & + .iten {
            margin-top: 0.7rem;
        }

        .product-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            > section {
                padding: 0.2rem 0;
                display: flex;
                gap: 0.7rem;
                span {
                    color: var(--theme);
                    font-size: 0.8rem;
                }
            }
        }
    }

    .actions {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.5rem;
        border: none;
        font-size: 1.5rem;
        align-items: center;
        display: flex;
        border-radius: 2rem;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

interface IItenImgProps {
    image: string;
}

export const ItenImg = styled.div<IItenImgProps>`
    background: url(${(props) => props.image});
    width: 100px;
    height: auto;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
`;
