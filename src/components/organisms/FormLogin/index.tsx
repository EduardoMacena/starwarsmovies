import { FC } from 'react';
import { Group, View } from './styles';
import { ViewProps } from 'react-native';
import Input from '../../molecules/Input';
import Button from '../../atoms/Button';

const FormLogin: FC<ViewProps> = () => {
    return (
        <View>
            <Group>
                <Input label="Email" />
                <Input label="Senha" />
            </Group>
            <Button caption='Acessar' />
        </View>
    );
};

export default FormLogin;
