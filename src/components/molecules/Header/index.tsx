import { FC } from 'react';
import HStack from '../../atoms/HStack';
import TextHeader from '../../atoms/TextHeader';
import { TextProps } from 'react-native';

export enum HeaderTypeEnum {
    'dashboard',
    'default'
}

/**
 * This is equivalent to:
 * type HeaderTypeStrings = 'dashboard' | 'default' ;
 */
type HeaderTypeStrings = keyof typeof HeaderTypeEnum;

export interface HeaderProps extends TextProps{
    type: HeaderTypeStrings;
}

const Header: FC<HeaderProps> = props => {
    const { type } = props;
    return (
        <HStack>
            <TextHeader type={type}>Star Wars Movies</TextHeader>
        </HStack>
    );
};

export default Header;
