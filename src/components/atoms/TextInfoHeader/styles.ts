import styled from 'styled-components/native';

export const TextH = styled.Text`
    font-weight: 400;
    font-size: 12px;
    margin-top: 32px;
    margin-bottom: 24px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
`;
