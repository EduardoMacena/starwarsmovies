import { FC } from 'react';
import { Content } from './styles';
import { ViewProps } from 'react-native';

const Container: FC<ViewProps> = ({ children }) => {
    return <Content>{children}</Content>
};

export default Container;
