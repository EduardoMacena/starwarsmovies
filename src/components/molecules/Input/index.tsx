import { FC } from 'react';
import { Content, InputField } from './styles';
import Label from '../../atoms/Label';
import { InputStringType } from '../../../data/types';

interface InputProps {
    label?: string;
    type?: InputStringType;
    errorText?: string;
    onChangeText?: (value: string) => void;
    secure?: boolean;
}

const Input: FC<InputProps> = props => {
    const { label, type, errorText = '', onChangeText, secure } = props;
    const isError = errorText?.length > 0;

    return (
        <Content>
            <Label type={errorText ? 'error' : 'default'}>{label}</Label>
            <InputField secureTextEntry={secure} onChangeText={onChangeText} type={type} isError={isError} />
            {errorText && <Label type="error">{errorText}</Label>}
        </Content>
    );
};

export default Input;
