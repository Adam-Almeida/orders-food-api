import styled from "styled-components/native";

export const Header = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.ImageBackground`
    width: 100%;
    height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 24px;
    right: 24px;
`;
