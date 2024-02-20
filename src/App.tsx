import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme/default';
import Router from './routers/start.navigation';
import StroreContext from './data/context/StroreContext';
import { StatusBar } from 'react-native';
import { FilmsType } from './data/interfaces';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

const App: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [films, setFilms] = useState<FilmsType[] | []>([]);

    const clear = () => {
        console.log('clearing user');
    };

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={STYLES[2]} />
            <StroreContext.Provider value={{ clear, isLoading, setIsLoading, films, setFilms }}>
                <Router />
            </StroreContext.Provider>
        </ThemeProvider>
    );
};

export default App;
