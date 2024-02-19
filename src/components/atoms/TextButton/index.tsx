import { FC } from 'react';
import { TextB } from './styles';
import { TextProps } from 'react-native';

const TextButton: FC<TextProps> = ({ children }) => {
    return <TextB>{children}</TextB>;
};

export default TextButton;
