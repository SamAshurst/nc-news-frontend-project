import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import * as api from "../utils/api";
import formatDate from "../utils/formatDate";

export default function PostComment({ article_id }) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState(null);
  const [posted, setPosted] = useState(false);
  const [postedComment, setPostedComment] = useState({});
  const [validPost, setValidPost] = useState(true);

  useEffect(() => {
    if (comment === null) return;
    if (comment.length < 10) {
      setValidPost(false);
      return;
    }
    api
      .postCommentByArticleId(article_id, loggedInUser.username, comment)
      .then((comment) => {
        setPosted(true);

        setPostedComment(comment);
      });
  }, [comment, article_id, loggedInUser.username]);

  function handleSubmit(e) {
    e.preventDefault();
    const commentBody = e.target.form[0].value;
    setComment(commentBody);
  }

  function handleClick(e, comment_id) {
    e.preventDefault();
    api.deleteCommentById(comment_id);
    setPosted(false);
  }

  if (posted) {
    return (
      <ul key={postedComment.comment_id} className="comment-list">
        <p className="comment-body">{postedComment.body}</p>
        <dt className="comment-posted">
          Posted by: {postedComment.author} <br></br>at{" "}
          {formatDate(postedComment.created_at)}
        </dt>
        <dt className="comment-votes">Votes: {postedComment.votes}</dt>
        <button
          className="comment-post-delete"
          onClick={(e) => {
            handleClick(e, postedComment.comment_id);
          }}
        >
          Delete post
        </button>
      </ul>
    );
  }

  return (
    <form>
      <textarea
        type="text"
        className={`post-comment-text valid-post-${validPost}`}
      ></textarea>
      <div className="post-length-error">
        {validPost ? "" : "Posts need to be at least 10 letters"}
      </div>
      <input
        type="submit"
        value="Post"
        className="post-comment-submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      />
    </form>
  );
}
