import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    padding-top: 25px;
    background: ${({ theme }) => theme.COLORS.PRIMARY};
`;
