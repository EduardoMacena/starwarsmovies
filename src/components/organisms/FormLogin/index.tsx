import { FC, useContext, useState } from 'react';
import { Group, View } from './styles';
import { ViewProps } from 'react-native';
import Input from '../../molecules/Input';
import Button from '../../atoms/Button';
import StoreContext from '../../../data/context/StroreContext';

export type UserLoginType = {
    email: string;
    password: string;
};

interface FormLoginProps extends ViewProps {
    onChange: (value: UserLoginType) => void;
}

const FormLogin: FC<FormLoginProps> = props => {
    const { onChange } = props;
    const { isLoading } = useContext(StoreContext);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Envia as informações de um possive acesso Login
    const _Subimit = () => {
        if (_ValidateFields()) {
            onChange({
                email,
                password
            });
        }
    };

    //Função para vaidar campos
    const _ValidateFields = () => {
        //regex de validação de email
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (email === '' || !emailRegex.test(email)) {
            _PostErrorEmail();
            return false;
        } else _clearErrors();

        if (password.length < 5) {
            _PostErrorPassword();
            return false;
        } else _clearErrors();

        return true;
    };

    const _PostErrorEmail = () => {
        setErrorEmail('Email inválido');
    };

    const _PostErrorPassword = () => {
        setErrorPassword('Senha inválida');
    };

    const _clearErrors = () => {
        setErrorEmail('');
        setErrorPassword('');
    };

    return (
        <View>
            <Group>
                <Input onChangeText={e => setEmail(e)} errorText={errorEmail} type="email" label="Email" />
                <Input onChangeText={e => setPassword(e)} secure errorText={errorPassword} type="password" label="Senha" />
            </Group>
            <Button disabled={isLoading} onPress={_Subimit} caption={isLoading ? 'Acessando' : 'Acessar'} />
        </View>
    );
};

export default FormLogin;
