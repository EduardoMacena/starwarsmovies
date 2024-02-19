import styled from 'styled-components/native';
import { LabelProps } from '.';

export const TextL = styled.Text<LabelProps>`
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme, type }) => (type === 'error' ? theme.COLORS.DANGER : theme.COLORS.TEXT_LABEL)};
`;

