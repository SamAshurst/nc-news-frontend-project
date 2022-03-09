import { useParams } from "react-router-dom";
import { useState } from "react";

import useArticle from "../utils/useArticle";
import alterVote from "../utils/alterVote";
import formatDate from "../utils/formatDate";
import Comments from "./Comments";
import CollapseWrapper from "./CollapseWrapper";

export default function SingleArticle() {
  const { article_id } = useParams();
  const { selectedArticle, setSelectedArticle, loading } =
    useArticle(article_id);
  const [count, setCount] = useState(0);

  const { title, author, body, comment_count, created_at, topic, votes } =
    selectedArticle;

  if (loading) return <div>Loading...</div>;
  return (
    <main>
      <h2 className="single-article-title">{title}</h2>
      <dt className="single-article-topic">{topic}</dt>
      <dt className="single-article-author">By: {author}</dt>
      <dt className="single-article-date">{formatDate(created_at)}</dt>
      <p className="single-article-body">{body}</p>
      <button
        onClick={() => {
          alterVote(setSelectedArticle, article_id, +1);
          setCount((currentCount) => (currentCount += 1));
        }}
        disabled={count === 1}
        id="vote-arrow-up"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <dt className="single-article-votes">Votes: {votes}</dt>
      <button
        onClick={() => {
          alterVote(setSelectedArticle, article_id, -1);
          setCount((currentCount) => (currentCount -= 1));
        }}
        disabled={count === -1}
        id="vote-arrow-down"
      >
        <i className="fa-solid fa-arrow-down"></i>
      </button>
      <CollapseWrapper comment_count={comment_count}>
        <Comments article_id={article_id} />
      </CollapseWrapper>
    </main>
  );
}
