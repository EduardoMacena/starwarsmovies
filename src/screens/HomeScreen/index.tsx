import { FC } from 'react';
import Header from '../../components/molecules/Header';
import ContainerBetween from '../../components/atoms/ContainerBetween';
import FormLogin from '../../components/organisms/FormLogin';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <ContainerBetween>
            <Header />
            <FormLogin />
        </ContainerBetween>
    );
};

export default Home;
