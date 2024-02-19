import { createContext } from 'react';

export const StoreContext = createContext({
    isLoading: false,
    setIsLoading: (value: boolean) => {},
    clear: () => {}
});

export default StoreContext;
