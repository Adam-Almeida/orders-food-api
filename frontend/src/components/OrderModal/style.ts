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

            img {
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
`;
