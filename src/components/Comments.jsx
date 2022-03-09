import { useState, useEffect } from "react";

import formatDate from "../utils/formatDate";
import * as api from "../utils/api";

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

  return <div>
    {comments.map((comment) => {
    return (
      <ul key={comment.comment_id} className="comment__list">
        <p>{comment.body}</p>
        <dt>
          Posted by: {comment.author} at {formatDate(comment.created_at)}
        </dt>
        <dt>Votes: {comment.votes}</dt>
      </ul>
    );
  })}
  </div>
}
