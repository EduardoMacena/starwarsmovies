import { FC } from 'react';
import { ButtonOpacity, Ionicons } from './styles';
import { TouchableOpacityProps } from 'react-native';
import VCenter from '../../atoms/VCenter';

const ButtonHeader: FC<TouchableOpacityProps> = (props) => {
    return (
        <ButtonOpacity {...props}>
            <VCenter>
                <Ionicons name="log-out-outline" />
            </VCenter>
        </ButtonOpacity>
    );
};

export default ButtonHeader;
