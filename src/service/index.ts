import axios from 'axios';

export const baseURL = 'https://swapi.dev/api/';

const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
};

export const api = axios.create({
    baseURL,
    headers
});
