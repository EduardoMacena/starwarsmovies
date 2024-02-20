import { FC } from 'react';
import { ButtonOpacity, AntDesign } from './styles';
import { TouchableOpacityProps } from 'react-native';
import VCenter from '../../atoms/VCenter';

const ButtonCard: FC<TouchableOpacityProps> = (props) => {
    return (
        <ButtonOpacity {...props}>
            <VCenter>
                <AntDesign name="arrowleft" />
            </VCenter>
        </ButtonOpacity>
    );
};

export default ButtonCard;
