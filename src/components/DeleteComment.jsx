import * as api from "../utils/api";

export default function DeleteComment({
  setPosted,
  removeComment,
  comment_id,
}) {
  function handleClick(comment_id) {
    api.deleteCommentById(comment_id);
    if (setPosted !== undefined) {
      setPosted(false);
    }
    if (removeComment !== undefined) {
      removeComment(comment_id);
    }
  }
  return (
    <button
      className="comment-post-delete"
      onClick={() => {
        handleClick(comment_id);
      }}
    >
      Delete post
    </button>
  );
}
