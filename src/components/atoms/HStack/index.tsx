import { FC } from 'react';
import { ViewProps } from 'react-native';
import { View } from './styles';

const HStack: FC<ViewProps> = ({ children }) => {
    return <View>{children}</View>;
};

export default HStack;
