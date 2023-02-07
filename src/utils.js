// https://bbc-4lw2.onrender.com/api/articles
import axios from 'axios';
export const baseAPI = axios.create({
    baseURL: 'https://bbc-4lw2.onrender.com/api/',
});

export const topicsAPI =()=>{
    return baseAPI.get('topics').then(({data})=>{return data})
}

export const articlesAPI =()=>{
    return baseAPI.get('articles').then(({data})=>{return data})
}

export const articlesByIdAPI = (article_id)=>{
    return baseAPI.get(`articles/${article_id}`)
    .then(({data})=>{return data})   
}


// let articlesById= null;
// articlesByIdAPI(2).then((data)=>{articlesById = data
// ici il faut le mettre dans le fichier concerner dans un usestats})


