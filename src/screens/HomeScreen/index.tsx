import { FC, useContext } from 'react';
import Header from '../../components/molecules/Header';
import ContainerBetween from '../../components/atoms/ContainerBetween';
import FormLogin, { UserLoginType } from '../../components/organisms/FormLogin';
import StoreContext from '../../data/context/StroreContext';
import { api } from '../../service';
import { Alert } from 'react-native';
import { ResponseData } from '../../data/interfaces';
import { replace } from '../../routers/util';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const { setIsLoading, setFilms } = useContext(StoreContext);
    const _GetInfo = async (user: UserLoginType) => {
        try {
            setIsLoading(true);
            const resp = await api.get<ResponseData>('/films');
            setFilms(resp.data.results);

            setIsLoading(false);
            replace('Dashboard');
        } catch (error) {
            setIsLoading(false);
            Alert.alert(`Error: ${String(error)}`);
        }
    };

    return (
        <ContainerBetween>
            <Header type='default' />
            <FormLogin onChange={_GetInfo} />
        </ContainerBetween>
    );
};

export default Home;
