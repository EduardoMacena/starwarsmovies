import { FC } from 'react';
import { View } from './styles';
import { ViewProps } from 'react-native';

const HCenter: FC<ViewProps> = ({ children }) => {
    return <View>{children}</View>;
};

export default HCenter;
