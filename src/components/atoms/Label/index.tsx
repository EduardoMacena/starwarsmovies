import { FC } from 'react';
import { TextL } from './styles';
import { TextProps } from 'react-native';

const Label: FC<TextProps> = ({ children }) => {
    return <TextL>{children}</TextL>;
};

export default Label;
