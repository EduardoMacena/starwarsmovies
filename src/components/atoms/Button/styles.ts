import styled from 'styled-components/native';

export const ButtonOpacity = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.BUTTON_INFO};
    height: 48px;
    justify-content: center;
    border-radius: 16px;
`;
