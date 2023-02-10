import "../css/postComment.css";
import { addCommentsOnArticleIdAPI } from "../utils";
import { useState, useEffect } from "react";

const PostComments = ({ article_id }) => {

  const [comment, setComment] = useState("");
  const [postedOrNot, setPostedOrNot] = useState(false);
  const [user, setUser] = useState("cooljmessy");
  
  const addComment = (event) => {
    event.preventDefault();
    addCommentsOnArticleIdAPI(article_id, comment, user);
    setComment("Message posted!");
    setPostedOrNot(true);
    console.log("comment added");
    };


  return (
    <div className="postcomment">
      <label htmlFor="msg">Post your comment</label>
      <textarea id="msg" name="msg" rows="5" cols="33" value={comment}
        onChange={(event) => setComment(event.target.value)}/>
        {console.log(comment)}
        <button 
            onClick={ addComment } disabled={postedOrNot} className={postedOrNot ? "active" : "nonvalidate"}>
        Post comment
      </button>
    </div>
  );
};
export default PostComments;
