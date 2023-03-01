import axios from 'axios';
export const capiFoodApi = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
});