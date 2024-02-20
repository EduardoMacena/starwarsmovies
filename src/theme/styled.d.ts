import 'styled-components';
import theme from './default';


declare module 'styled-components' {
    type ITheme = typeof theme;

    export interface DefaultTheme extends ITheme {}
}
