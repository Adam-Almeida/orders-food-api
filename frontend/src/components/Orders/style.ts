import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1216px;
    margin: 1.4rem auto;
    display: flex;
    gap: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 32px;
    }
`;
