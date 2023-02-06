// https://bbc-4lw2.onrender.com/api/articles
import axios from 'axios';

export const topics = axios.create({
    baseURL: 'https://bbc-4lw2.onrender.com/api/topics',   
});
export const articlesAxios = axios.create({
    baseURL: 'https://bbc-4lw2.onrender.com/api/articles',   
});
export const usersAxios = axios.create({
    baseURL: 'https://bbc-4lw2.onrender.com/api/users',   
});
