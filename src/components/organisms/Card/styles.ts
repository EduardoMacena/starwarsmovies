import styled, { css } from 'styled-components/native';
import { CardBasicProps } from '.';

export const View = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})<CardBasicProps>`
    margin-bottom: 0px;

    ${({ type }) =>
        type !== 'complete' &&
        css`
            margin-left: 24px;
            margin-right: 24px;
            margin-bottom: 16px;
        `}
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Description = styled.Text`
    font-size: 16px;
    font-weight: 700;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.TEXT_INFO};
`;

export const Year = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.TEXT_SECUNDARY};
`;

export const ImageFilm = styled.Image<CardBasicProps>`
    width: auto;
    height: 225px;

        ${({ type }) =>
            type === 'image' &&
            css`
                height: 247px;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
            `};
`;

export const Content = styled.View<CardBasicProps>`
${({ type }) =>
         type !== 'complete' &&
        css`
            height: 97px;
        `}

    ${({ type }) =>
         type === 'basic' &&
        css`
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        `}

    border-bottom-right-radius: ${({ type }) => (type === 'complete' ? `0px` : `8px`)};
    border-bottom-left-radius: ${({ type }) => (type === 'complete' ? `0px` : `8px`)};

    background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    gap: 12px;
    padding: 16px;
`;
