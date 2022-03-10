import { useState, useEffect } from "react";

import formatDate from "../utils/formatDate";
import * as api from "../utils/api";
import PostComment from "./PostComment";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);


  const element = document.getElementById('anchor-name')

  useEffect(() => {
    setLoading(true);
    api.getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
      function executeScroll  () {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      executeScroll()
    });
  }, [article_id, element]);



  if (loading) return <div>Loading...</div>;

  return <section className="comment-section">
    <PostComment article_id={article_id}/>
    {comments.map((comment) => {
    return (
      <ul key={comment.comment_id} className="comment-list">
        <p className="comment-body">{comment.body}</p>
        <dt className="comment-posted">
          Posted by: {comment.author} <br></br>at {formatDate(comment.created_at)}
        </dt>
        <dt className="comment-votes">Votes: {comment.votes}</dt>
      </ul>
    );
  })}
  </section>
}
