import { FC } from 'react';
import { TextH } from './styles';
import { TextProps } from 'react-native';

const TextHeader: FC<TextProps> = ({ children }) => {
    return <TextH>{children}</TextH>;
};

export default TextHeader;
