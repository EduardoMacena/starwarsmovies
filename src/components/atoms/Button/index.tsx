import { FC } from 'react';
import { ButtonOpacity } from './styles';
import { TouchableOpacityProps } from 'react-native';
import TextButton from '../TextButton';

interface ButtonProps extends TouchableOpacityProps {
    caption?: string;
}

const Button: FC<ButtonProps> = props => {
    const { caption, onPress } = props;
    return (
        <ButtonOpacity onPress={onPress}>
            <TextButton>{caption}</TextButton>
        </ButtonOpacity>
    );
};

export default Button;
