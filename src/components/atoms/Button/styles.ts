import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/Ionicons';
import { useLinkProps } from '@react-navigation/native';
import { Animated } from 'react-native';

export const ButtonOpacity = styled.TouchableOpacity`
    background: ${({ theme, disabled }) => (disabled ? theme.COLORS.BUTTON_INFO_DISABLED : theme.COLORS.BUTTON_INFO)};
    height: 48px;
    justify-content: center;
    border-radius: 16px;
`;

export type RotateType = {
    rotate: string;
};

export const Ionicons = styled(icon).attrs({
    size: 24
})<RotateType>`
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
    transform: ${({ rotate }) => rotate};
    margin-left: 10px;
`;
