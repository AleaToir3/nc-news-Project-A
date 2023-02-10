import Last4Cards from "./Last4Cards";
import { articlesAPI } from "../utils";
import { useEffect, useState } from "react";
import "../css/index.css"

const Index = () => {
  const [articles, setArticles] = useState([]);

  const [randomArticles, setrandomArticles] = useState([]);

  const [articlesLastPost, setArticlesLastPost] = useState([]);


  useEffect(() => {
    articlesAPI()
      .then((res) => {    
        const sortedArticles = res.articles.sort((a, b) => 
          {
            return new Date(b.created_at) - new Date(a.created_at);
          })
          const fourArticlesSorted = sortedArticles.slice(0, 4);  
          setArticles(fourArticlesSorted);
        // ----------------------------------------
        // add the rdm number
        const fourRdmArticleNotIncludedInFourArticles = sortedArticles.filter((article) => {
          return !fourArticlesSorted.includes(article);
        }).sort(() => Math.random() - 0.5).slice(0, 4);
        setrandomArticles(fourRdmArticleNotIncludedInFourArticles)
        // ----------------------------------------
      
          });
  }, [setArticles])


  return (
    <>
      <h1>index</h1>
      <h2 className="h2title">Last 4 articles </h2>
      <div className="articles">        
      {articles.length > 0 ? <Last4Cards articles={articles} /> : <h1>loading...</h1>}
      </div>
      <h2 className="h2title">Random articles not include in the last for articles </h2>
      <div className="articles">
      {randomArticles.length > 0 ? <Last4Cards articles={randomArticles} /> : <h1>loading...</h1>}
      </div>
    </>
  );
};
export default Index;
