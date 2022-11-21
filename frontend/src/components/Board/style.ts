import styled from "styled-components";

export const CardBoard = styled.div`
    padding: 1rem;
    border: 1px solid var(--gray-200);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;

    img{
        width: 2rem;
        height: 2rem;
    }

    span{
        font-size: 1rem;
    }

    > header {
        padding: 2rem;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const OrdersContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    button{
        border: 1px solid var(--gray-100);
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;

        height: 128px;
        background: var(--white);

        strong{
            font-weight: 500;
        }

        span{
            font-size: 0.9rem;
            color: var(--gray-300);
        }
    }

`;

