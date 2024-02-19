import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { InputStringType } from '../../../data/types';

interface InputFieldProps extends TextInputProps {
    type?: InputStringType;
    isError?: boolean;
}

export const InputField = styled.TextInput<InputFieldProps>`
    height: 48px;
    border-width: 2px;
    border-radius: 16px;
    border-color: ${({ theme,  isError }) => isError ? theme.COLORS.DANGER : theme.COLORS.TEXT_LABEL};
    padding-left: 20px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: 700;
`;

export const Content = styled.View`
    gap: 8px;
`;

