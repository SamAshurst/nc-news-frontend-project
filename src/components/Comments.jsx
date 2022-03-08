import formatDate from "../utils/formatDate";

export default function Comments({ comments }) {
  console.log(comments);
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
