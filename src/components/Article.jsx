import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articlesByIdAPI, patchVoteArticleIdAPI } from "../utils";
import { BsHandThumbsDown, BsHandThumbsUp, BsFillEmojiAngryFill } from "react-icons/bs";
import "../css/article.css";
import ListComments from "./ListComments";
const Article = () => {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [clickUp, setClickUp] = useState(false);
  const [clickdDown, setClickdDown] = useState(false);
  const [vote, setVote] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    articlesByIdAPI(article_id).then((res) => {
      setArticle(res.articleId[0]);
      setLoading(false);
    }).catch((err) => {
      setError(err);
        });
  }, [setArticle, setVote]);

  const changeVote = (id, changeVote) => {
    setVote((cuurValue) => {
      return cuurValue + changeVote;
    });

    patchVoteArticleIdAPI(id, changeVote);

    if (changeVote === 1) {
      setClickUp(true);
      setClickdDown(false);
    } else {
      setClickdDown(true);
      setClickUp(false);
    }
  };
  if(loading){
    if(error) {
      return <h1><BsFillEmojiAngryFill /> {error.response.data} <BsFillEmojiAngryFill /> </h1>
    }else{
      return <p>loading...</p>
    }
   }
  return (
    <div className="article">
      <div>
        <h2>TITRE {article?.title}</h2>
        <p>TOPIC {article?.topic}</p>

        <img
          src={article?.article_img_url}
          alt="images for title"
        />
        <div>
          <p>body {article?.body}</p>
          <i className="voteArticle">
            <button
              onClick={() => {
                changeVote(article_id, 1);
              }}
              disabled={clickUp}>
              <BsHandThumbsUp />
            </button>
            {article?.votes + vote}
            <button
              onClick={() => {changeVote(article_id, -1);}} disabled={clickdDown}>
              <BsHandThumbsDown />
            </button>
          </i>
        </div>
      </div>
      <h3>COMMENTS</h3>
     
      <ListComments article_id={article_id}/>
    </div>
  );
};
export default Article;
