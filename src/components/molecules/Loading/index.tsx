import { FC } from 'react';
import VCenter from '../../atoms/VCenter';
import Loader from '../../atoms/Loader';
import TextInfoHeader from '../../atoms/TextInfoHeader';

const Loading: FC = () => {
    return (
        <VCenter>
            <Loader />
            <TextInfoHeader>Carregando...</TextInfoHeader>
        </VCenter>
    );
};

export default Loading;
