import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articlesByIdAPI } from "../utils";
import "../css/article.css"
const Article = ()=>{
    const [article,setArticle] = useState()
    const {article_id} = useParams()

    useEffect(()=>{
        articlesByIdAPI(article_id)
        .then((res)=>{
            console.log("res",res)
            setArticle(res.articleId[0])
        })
    },[setArticle])
    

    return(
        <div className="article">
            {console.log("article",article)}
            <h2>TITRE {article?.title}</h2>
            <p>TOPIC {article?.topic}</p>

            <img src={article?.article_img_url} alt="" />  
            <div>
                <p>body {article?.body}</p>
                <i>VOTE {article?.vote || 0}</i>
            </div>
        </div>
    )
}
export default Article


// article_img_url
// : 
// "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700"
// author
// : 
// "jessjelly"
// body
// : 
// "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment."
// comment_count
// : 
// "8"
// created_at
// : 
// "2020-11-07T06:03:00.000Z"
// title
// : 
// "Running a Node App"
// topic
// : 
// "coding"
// votes
// : 
// 0