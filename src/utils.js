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
export const patchVoteArticleIdAPI = (article_id,addvote)=>{
    const patchBody =  {inc_votes: addvote}
    return baseAPI.patch(`articles/${article_id}`,patchBody)
    .then(({data})=>{
        return data})   
}
export const commentsByArticleAPI = (article_id)=>{
    return baseAPI.get(`articles/${article_id}/comments`)
}

export const addCommentsOnArticleIdAPI = (article_id)=>{
    return baseAPI.get(`articles/${article_id}/comments`)
}
