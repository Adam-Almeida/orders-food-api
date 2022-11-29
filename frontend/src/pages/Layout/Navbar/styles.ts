import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    a {
        color: var(--theme);
        cursor: pointer;
        position: relative;
        padding: 1rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        flex: 1;
        background: #fff;
        font-weight: 500;
    }

    a:after {
        content: "";
        position: absolute;
        width: 89%;
        height: 2px;
        bottom: 0px;
        transform: scaleX(0);
        background: var(--theme);
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
    }

    a:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    a:last-child {
        background-color: #a3eece;
        color: #09844f;
        :after {
            background: #09844f;
        }

        svg {
            color: #a3eece;
            background: #09844f;
        }
    }

    svg {
        width: 42px;
        height: 42px;
        padding: 0.5rem;
        background: var(--theme);
        color: var(--white);
        margin-right: 1rem;
        border-radius: 0.25rem;
    }
`;
