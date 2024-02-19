import { FC } from 'react';
import HCenter from '../../atoms/HCenter';
import Loader from '../../atoms/Loader';
import TextInfoHeader from '../../atoms/TextInfoHeader';

const Loading: FC = () => {
    return (
        <HCenter>
            <Loader />
            <TextInfoHeader>Carregando...</TextInfoHeader>
        </HCenter>
    );
};

export default Loading;
