import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/AntDesign';

export const ButtonOpacity = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    height: 48px;
    width: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export type RotateType = {
    rotate: string;
};

export const AntDesign = styled(icon).attrs({
    size: 24
})`
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
`;
