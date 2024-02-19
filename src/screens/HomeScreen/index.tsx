import { FC, useContext } from 'react';
import Header from '../../components/molecules/Header';
import ContainerBetween from '../../components/atoms/ContainerBetween';
import FormLogin, { UserLoginType } from '../../components/organisms/FormLogin';
import StoreContext from '../../data/context/StroreContext';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const { setIsLoading } = useContext(StoreContext);
    const _GetInfo = (user: UserLoginType) => {
        setIsLoading(true);
    };

    return (
        <ContainerBetween>
            <Header />
            <FormLogin onChange={_GetInfo} />
        </ContainerBetween>
    );
};

export default Home;
