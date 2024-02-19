import { createContext } from 'react';

export const StoreContext = createContext({
    clear: () => {}
});

export default StoreContext;
