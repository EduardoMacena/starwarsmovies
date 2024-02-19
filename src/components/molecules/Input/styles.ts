import styled from 'styled-components/native';

export const InputField = styled.TextInput`
    height: 48px;
    border-width: 2px;
    border-radius: 16px;
    border-color: ${({ theme }) => theme.COLORS.TEXT_LABEL};
    padding-left: 20px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: 700;
`;

export const Content = styled.View`
    gap: 8px;
`;

