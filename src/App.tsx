import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './config/theme';
import Router from './routers/start.navigation';
import StroreContext from './data/context/StroreContext';
import { StatusBar } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

const App: FC = () => {
    const clear = () => {
        console.log('clearing user');
    };

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={STYLES[2]} />
            <StroreContext.Provider value={{ clear }}>
                <Router />
            </StroreContext.Provider>
        </ThemeProvider>
    );
};

export default App;
