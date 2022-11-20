import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--theme);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 198px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--white);
        font-size: 2rem;
        font-weight: 600;
    }

    h2 {
        color: var(--white);
        font-size: 1rem;
        font-weight: 400;
    }
`;
