import styled from "styled-components";

export const Container = styled.div`
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: var(--theme);
    height: 35px;
    width: 35px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;
