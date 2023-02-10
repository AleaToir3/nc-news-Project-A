import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articlesByIdAPI, commentsByArticleAPI, patchVoteArticleIdAPI } from "../utils";
import { BsHandThumbsDown, BsHandThumbsUp, BsPerson,BsFillEmojiAngryFill } from "react-icons/bs";
import "../css/article.css";
import convertDate from "../functions/date";
import ListComments from "./ListComments";
const Article = () => {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // const [comments, setComments] = useState();
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

  // useEffect(() => {
  //   commentsByArticleAPI(article_id).then((resCom) => {
  //     setComments(resCom.data.commentsByArticle);
  //   });
  // }, [setComments]);

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
          alt=""
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
      {/* <div className="comments">
        {comments?.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              className="comment">
              <h6>
                <BsPerson />
                {comment.author}
              </h6>
              <p>{comment.body}</p>

              <div className="voteComment">
                <i>
                  <BsHandThumbsUp /> {comment.votes} <BsHandThumbsDown />
                </i>
                <i>{convertDate(comment.created_at)}</i>
              </div>
            </div>
          );
        })}
      </div> */}
      <ListComments article_id={article_id}/>
    </div>
  );
};
export default Article;
