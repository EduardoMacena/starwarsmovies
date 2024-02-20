import { FC, PropsWithChildren } from 'react';
import { TextH } from './styles';
import { HeaderProps } from '../../molecules/Header';

const TextHeader: FC<HeaderProps> = (props: PropsWithChildren<HeaderProps>) => {
    const { children, ...res } = props;
    return <TextH {...res}>{children}</TextH>;
};

export default TextHeader;
