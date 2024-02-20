import { createContext } from 'react';
import { FilmsType, IStoreContext } from '../interfaces';

export const StoreContext = createContext<IStoreContext>({
    films: [{} as FilmsType],
    setFilms: (value: FilmsType[]) => value,
    isLoading: false,
    setIsLoading: (value: boolean) => value,
    clear: () => {}
});

export default StoreContext;
