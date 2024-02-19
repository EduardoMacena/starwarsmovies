import { FC, PropsWithChildren, useEffect } from 'react';
import { TextL } from './styles';
import { TextProps } from 'react-native';
import { LabelStringType } from '../../../data/types';

export interface LabelProps extends TextProps {
    type?: LabelStringType;
}

const Label: FC<LabelProps> = (props: PropsWithChildren<LabelProps>) => {
    const { type, children } = props;
    return <TextL type={type}>{children}</TextL>;
};

export default Label;
