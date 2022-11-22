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
    width: 480px;
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

    .status-container {
        margin-top: 2rem;

        > small {
            font-size: 0.9rem;
            font-weight: 500;
            opacity: 0.8;
        }

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.2rem;

            > img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
`;

export const OrderDetails = styled.div`
    margin-top: 2rem;

    > small {
        font-size: 0.9rem;
        font-weight: 500;
        opacity: 0.8;
    }

    .iten {
        display: flex;
        margin-top: 1rem;
        gap: 0.7rem;

        & + .iten {
            margin-top: 0.7rem;
        }

        .product-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .quantity,
        span {
            font-size: 0.9rem;
            color: var(--gray-400);
        }
    }

    .total {
        width: 100%;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-weight: 500;
            font-size: 0.9rem;
            opacity: 0.8;
        }

        strong {
            font-weight: 600;
            font-size: 1.1rem;
        }
    }

    >button {
        width: 100%;
        padding: 1.4rem 0;
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 2.5rem;
        border-radius: 2.5rem;
        color: var(--white);
        font-weight: 600;
        font-size: 1rem;
        background-color: var(--gray-500);
        border: none;
        > img {
            width: 25px;
            height: 25px;
        }
    }

    .cancel{
        background-color: transparent;
        margin-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        > strong {
            font-weight: 600;
            color: red;
        }
    }
`;

interface IItenImgProps {
    image: string;
}

export const ItenImg = styled.div<IItenImgProps>`
    background: url(${(props) => props.image});
    width: 58px;
    height: 50px;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
`;
