import { useState, useEffect } from "react";

import formatDate from "../utils/formatDate";
import * as api from "../utils/api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) return <div>Loading...</div>;
  return comments.map((comment) => {
    return (
      <ul key={comment.comment_id} className="comment__list">
        <p>{comment.body}</p>
        <dt>
          Posted by: {comment.author} at {formatDate(comment.created_at)}
        </dt>
        <dt>Votes: {comment.votes}</dt>
      </ul>
    );
  });
}
