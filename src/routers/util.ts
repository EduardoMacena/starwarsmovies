import { createNavigationContainerRef, StackActions, CommonActions } from '@react-navigation/native';

enum ScreensENUN {
    'Splash',
    'Home',
    'Dashboard'
}

/**
 * This is equivalent to:
 * type ScreensStrings = 'Splash' | 'Home' | Dashboard;
 */
type ScreensStrings = keyof typeof ScreensENUN;

export const navigationRef = createNavigationContainerRef();

const isReady = navigationRef.isReady;

export const navigate = (screen: ScreensStrings, args?: Object) => isReady() && navigationRef.dispatch(CommonActions.navigate(screen, args));

export const popToTop = () => {
    isReady() && navigationRef.dispatch(StackActions.popToTop());
};

export const goBack = () => isReady() && navigationRef.goBack();

export const replace = (screen: ScreensStrings) =>
    isReady() &&
    navigationRef.dispatch({
        ...StackActions.replace(screen)
    });
