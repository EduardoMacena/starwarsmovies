import styled from 'styled-components/native';
import { HStackBetweenProps } from '.';

export const View = styled.View<HStackBetweenProps>`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${({ type }) => (type === 'center' ? 'center' : 'start')};
`;
