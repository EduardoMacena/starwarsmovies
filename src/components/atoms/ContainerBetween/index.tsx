import { FC } from 'react';
import { Content } from './styles';
import { ViewProps } from 'react-native';

const ContainerBetween: FC<ViewProps> = ({ children }) => {
    return <Content>{children}</Content>
};

export default ContainerBetween;
