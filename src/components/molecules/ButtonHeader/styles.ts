import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/Ionicons';

export const ButtonOpacity = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.SECUNDARY};
    height: 48px;
    width: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 24px;
    margin-top: 30px;
`;

export type RotateType = {
    rotate: string;
};

export const Ionicons = styled(icon).attrs({
    size: 24
})`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    transform: rotate(180deg)
`;
