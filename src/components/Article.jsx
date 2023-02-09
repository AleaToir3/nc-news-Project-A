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
            </div>
        </div>
    )
}
export default Article
g