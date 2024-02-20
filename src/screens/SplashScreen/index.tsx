import { FC, useEffect, useState } from 'react';
import { Alert, NativeModules, Platform } from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/molecules/Header';
import Loading from '../../components/molecules/Loading';
import TextInfoHeader from '../../components/atoms/TextInfoHeader';
import { replace } from '../../routers/util';

interface DeviceType {
    osVersion: string;
    modelName: string;
    appVersion: string;
}

const Splash: FC = () => {
    const [device, setDevice] = useState<DeviceType>({} as DeviceType);

    const _GetInfoDevice = async () => {
        try {
            const result: string = Platform.OS === 'ios' ? await _GetInfoIOS() : await _GetInfoAndroid();
            //atualiza o estado Device convertendo String para JSON
            setDevice(JSON.parse(result));
        } catch (error) {
            Alert.alert(String(error));
        }
    };

    const _GetInfoIOS = async () => {
        //recebe as informações do dispositivo IOS um objeto em string
        const result: string = await NativeModules.InfoDevice.getinfo();
        return result;
    };

    const _GetInfoAndroid = async () => {
        //recebe as informações do dispositivo Android um objeto em string
        const result: string = await NativeModules.InfoDeviceAndroid.getInfo();
        return result;
    };

    useEffect(() => {
        _GetInfoDevice();
        setTimeout(() => {
            replace('Home');
        }, 3000);
    }, []);

    return (
        <Container>
            <Header type='default' />
            <Loading />
            <TextInfoHeader>
                Versão: {device?.appVersion} - {Platform.OS === 'ios' ? 'IOS' : 'Android'}: {device?.osVersion} - {device?.modelName}
            </TextInfoHeader>
        </Container>
    );
};

export default Splash;
