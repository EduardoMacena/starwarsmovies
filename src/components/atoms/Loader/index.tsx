import { FC, useEffect, useState } from 'react';
import { Loading } from './styles';
import { Animated, Easing } from 'react-native';

const Loader: FC = () => {
    const [rotate, setRotate] = useState(0);
    const [sizeDeg] = useState(360);
    const [duration] = useState(1200 / sizeDeg);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setRotate(rotate === sizeDeg ? 0 : rotate + 1);
        }, duration);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [rotate]);

    return <Loading rotate={`rotate(${rotate}deg)`} source={require('../../../assets/Loader.png')} />;
};

export default Loader;
