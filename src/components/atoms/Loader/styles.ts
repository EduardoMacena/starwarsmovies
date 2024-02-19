import styled from 'styled-components/native';
import { Animated } from 'react-native';

export type RotateType = {
    rotate: string;
};

export const Loading = styled(Animated.Image)<RotateType>`
    width: 100px;
    height: 100px;

    transform: ${({ rotate }) => rotate};
`;
