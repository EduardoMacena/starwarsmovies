import styled from 'styled-components/native';
import { HeaderProps } from '../../molecules/Header';

export const TextH = styled.Text<HeaderProps>`
    font-weight: 700;
    font-size: 48px;
    margin-left: ${({type}) => type === 'dashboard' ? `24px` : `48px` } ;
    margin-bottom: ${({type}) => type === 'dashboard' ? `48px` : `0px` } ;
    margin-top: 24px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
`;
