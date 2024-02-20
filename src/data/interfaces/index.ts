export interface ResponseData {
    count: number;
    next: null;
    previous: null;
    results: FilmsType[];
}

export interface FilmsType {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

export interface IStoreContext {
    films: FilmsType[] | [];
    setFilms: (value: FilmsType[]) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    clear: () => void;
}
