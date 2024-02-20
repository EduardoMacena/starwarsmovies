import { FC, PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { View } from './styles';

export interface HStackBetweenProps extends ViewProps {
    type?: HStackBetweenTypeStrings;
}

export enum HStackBetweenTypeEnum {
    'top',
    'center'
}

/**
 * This is equivalent to:
 * type HStackBetweenTypeStrings = 'top' | 'center' ;
 */
type HStackBetweenTypeStrings = keyof typeof HStackBetweenTypeEnum;


const HStackBetween: FC<HStackBetweenProps> = (props: PropsWithChildren<HStackBetweenProps>) => {
    const { children, type } = props
    return <View type={type}>{children}</View>;
};

export default HStackBetween;
