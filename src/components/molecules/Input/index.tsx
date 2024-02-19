import { FC } from 'react';
import { Content, InputField } from './styles';
import Label from '../../atoms/Label';

interface InputProps {
    label?: string;
}

const Input: FC<InputProps> = props => {
    const { label } = props;
    return (
        <Content>
            <Label>{label}</Label>
            <InputField />
        </Content>
    );
};

export default Input;
