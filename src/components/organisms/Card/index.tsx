import { FC, useEffect } from 'react';
import { Content, ImageFilm, Description, SubTitle, Title, View, Year } from './styles';
import HStackBetween from '../../atoms/HStackBetween';
import { TouchableOpacityProps } from 'react-native';
import HStack from '../../atoms/HStack';
import ButtonCard from '../../molecules/ButtonCard';

export interface CardBasicProps extends TouchableOpacityProps {
    title?: string;
    subtitle?: string;
    year?: string;
    info?: string;
    type?: CardTypeStrings;
    episodeId?: number;
    onExitPress?: () => void;
}

export enum CardTypeEnum {
    'image',
    'basic',
    'complete'
}

/**
 * This is equivalent to:
 * type CardTypeStrings = 'image' | 'basic' | complete;
 */
type CardTypeStrings = keyof typeof CardTypeEnum;

const Card: FC<CardBasicProps> = props => {
    const { type = 'basic', title, subtitle, year, episodeId = 4, info, onExitPress = () => {}, ...res } = props;

    const _GetImageFilm = () => {
        switch (episodeId) {
            case 1:
                return require('../../../assets/ep1.png');
            case 2:
                return require('../../../assets/ep2.png');
            case 3:
                return require('../../../assets/ep3.png');
            case 4:
                return require('../../../assets/ep4.jpeg');
            case 5:
                return require('../../../assets/ep5.png');
            case 6:
                return require('../../../assets/ep6.png');
            default:
                return require('../../../assets/ep4.jpeg');
        }
    };

    useEffect(() => {
        console.log(info);
    }, []);

    return (
        <View type={type} {...res}>
            {type !== 'basic' && <ImageFilm type={type} source={_GetImageFilm()} />}
            <Content type={type}>
                <Title>{title}</Title>
                <HStackBetween type='top'>
                    <SubTitle>{subtitle}</SubTitle>
                    <Year>{year}</Year>
                </HStackBetween>
                {info && <Description>{`${info}`}</Description>}
                {info && (
                    <HStackBetween>
                        <HStack />
                        <ButtonCard onPress={onExitPress} />
                    </HStackBetween>
                )}
            </Content>
        </View>
    );
};

export default Card;
