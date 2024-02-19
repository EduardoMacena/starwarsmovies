import styled from 'styled-components/native';

export const View = styled.View`
    background: ${({ theme }) => theme.COLORS.SECUNDARY};
    height: 68%;
    max-height: 426px;
    border-radius: 32px 32px 0px 0px;
    padding: 15px;
    justify-content: space-between;
`;

export const Group = styled.View`
    background: ${({ theme }) => theme.COLORS.SECUNDARY};
    gap: 16px;
    padding-top: 25px;
`;
