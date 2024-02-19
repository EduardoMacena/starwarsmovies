import { FC, useContext, useEffect, useState } from 'react';
import { ButtonOpacity, Ionicons } from './styles';
import { TouchableOpacityProps } from 'react-native';
import TextButton from '../TextButton';
import HCenter from '../HCenter';
import StoreContext from '../../../data/context/StroreContext';

interface ButtonProps extends TouchableOpacityProps {
    caption?: string;
}

const Button: FC<ButtonProps> = props => {
    const { caption, ...res } = props;
    const { isLoading } = useContext(StoreContext);
    const [rotate, setRotate] = useState(0);
    const [sizeDeg] = useState(360);
    const [duration] = useState(1200/360);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setRotate(rotate === sizeDeg ? 0 : rotate + 1);
        }, duration);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [rotate]);

    return (
        <ButtonOpacity {...res}>
            <HCenter>
                <TextButton>{caption}</TextButton>
                {isLoading && <Ionicons name="reload" rotate={`rotate(${rotate}deg)`} />}
            </HCenter>
        </ButtonOpacity>
    );
};

export default Button;
