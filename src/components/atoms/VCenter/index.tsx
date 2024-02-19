import { FC } from 'react';
import { View } from './styles';
import { ViewProps } from 'react-native';

const VCenter: FC<ViewProps> = ({ children }) => {
    return <View>{children}</View>;
};

export default VCenter;
