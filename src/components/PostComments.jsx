const PostComments = ({ comments }) => {
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
    };