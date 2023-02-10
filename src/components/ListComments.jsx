import React, { useState, useEffect } from "react";
import { commentsByArticleAPI } from "../utils";
import { BsHandThumbsDown, BsHandThumbsUp, BsPerson } from "react-icons/bs";
import convertDate from "../functions/date";

const ListComments = ({article_id}) => {
    const [comments, setComments] = useState();

    useEffect(() => {
        commentsByArticleAPI(article_id).then((resCom) => {
          setComments(resCom.data.commentsByArticle);
        });
      }, [setComments]);

    return (
        <div className="comments">
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
      </div>
    );
    }
    export default ListComments;